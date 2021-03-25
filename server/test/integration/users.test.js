const request = require('supertest')
// const Operator = require('../../models/operator')
const User = require('../../models/User')

describe('/users', () => {
    let server
    let authUser
    let adminUser
    beforeEach(async() => {
        server = require('../../index')
        // Create a user to generate an auth token
        authUser = new User({
            name: 'test',
            email: 'user@user.user',
            password: 'tester'
        })

        adminUser = new User({
            name: 'test admin',
            email: 'admin@admin.admin',
            password: 'tester',
            roles: { admin: true }
        })

        await authUser.save(),
        await adminUser.save()
    })
    
    afterEach(async () => {
        await User.deleteMany({})
        server.close()
    })

    describe('POST /users/register', () => {  
        it('creates a new user', async () => {
            const userInfo = {
                name: 'Test User',
                email: 'test@test.com',
                password: '123456',
                passwordCopy: '123456'
            }
            const { status, body } = await request(server).post('/users/register')
                .send(userInfo)
            expect(status).toBe(201)
            expect(body.user.name).toBe(userInfo.name)
            expect(body.user.email).toBe(userInfo.email)
            expect(body.user.password).toBeUndefined()
        })

        it('returns 400 if the user already exists', async () => {
            const userToExist = new User({
                name: 'Test User',
                email: 'test@test.com',
                password: '123456'
            })
            await userToExist.save()
            
            const userInfo = {
                name: 'Test User',
                email: 'test@test.com',
                password: '123456',
                passwordCopy: '123456'
            }
            const { status, body } = await request(server).post('/users/register')
                .send(userInfo)
            expect(status).toBe(400)
        })
    })

    describe('GET /users', () => {
        it('returns 401 if the user is not authenticated', async () => {
            const { status } = await request(server).get('/users')
            expect(status).toBe(401)
        })
        
        it('returns 403 if the user is not an admin', async () => {
            const { status } = await request(server).get('/users')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
            expect(status).toBe(403)
        })
        
        it('returns all users', async () => {
            // Create a user to generate an auth token
            const authUser = new User({
                name: 'test',
                email: 'a@a.a',
                password: 'tester',
                roles: {
                    admin: true,
                }
            })
            await authUser.save()

            const { body, status } = await request(server)
                .get('/users')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
            expect(body.length).toBe(3)
            expect(status).toBe(200)
        })
        
    })
})