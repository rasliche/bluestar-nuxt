const server = require('../../index')
const request = require('supertest')
// const Operator = require('../../models/operator')
const User = require('../../models/User')

describe('/users', () => {
    // beforeAll(async() => {
    //     await Promise.all([
    //         User.deleteMany({}),
    //         Operator.deleteMany({})
    //     ])
    // })
    
    afterEach(async() => {
        await Promise.all([
            User.deleteMany({}),
            // Operator.deleteMany({})
        ])
    })

    describe('POST /users', () => {  
        it('returns 200 if the user is successfully created', async () => {
            const userInfo = {
                name: 'Test Shop',
                email: 'test@test.com',
                password: '123456'
            }
            const { status, body } = await request(server).post('/users')
                .send(userInfo)
            expect(status).toBe(200)
            expect(body.name).toBe(userInfo.name)
            expect(body.email).toBe(userInfo.email)
            expect(body.password).not.toBe(userInfo.password)
        })

        it('returns 400 if the user already exists', async () => {
            const { status } = await request(server).post('/users')
                .send({
                    name: 'Test Shop',
                    accessCode: 'floridakeys'
                })
            expect(status).toBe(200)
        })
    })

    describe('GET /users', () => {
        it('returns 401 if the user is not authenticated', async () => {
            const { status } = await request(server).get('/users')
            expect(status).toBe(401)
        })
        
        it('returns 403 if the user is not an admin', async () => {
            const { status } = await request(server).get('/operators')
            expect(status).toBe(403)
        })
        
        it('Returns 200 and a list of all users', async () => {
            // Create a user to generate an auth token
            const authUser = new User({
                name: 'test',
                email: 'a@a.a',
                password: 'tester',
                roles: {
                    admin: true
                }
            })
            await authUser.save()

            const { body, status } = await request(server)
                .get('/users')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
            expect(body.length).toBe(1)
            expect(status).toBe(200)
        })
        
    })
})