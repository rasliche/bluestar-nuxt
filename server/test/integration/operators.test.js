const server = require('../../index')
const request = require('supertest')
const Operator = require('../../models/operator')
const User = require('../../models/User')

describe('/operators', () => {
    // beforeAll(async() => {
    //     await Promise.all([
    //         User.deleteMany({}),
    //         Operator.deleteMany({})
    //     ])
    // })
    
    afterEach(async() => {
        await Promise.all([
            User.deleteMany({}),
            Operator.deleteMany({})
        ])
    })

    describe('POST /operators', () => {
        it('returns 401 if the user is not authenticated', async () => {
            const { status } = await request(server).post('/operators')
                .send({
                    name: 'Test Shop',
                    accessCode: 'floridakeys'
                })
            expect(status).toBe(401)
        })

        it('returns 403 if user is not an admin', async () => {
            const { status } = await request(server).post('/operators')
                .send({
                    name: 'Test Shop',
                    accessCode: 'floridakeys'
                })
            expect(status).toBe(403)
        })
        
        it('returns 200 if the operator is successfully added to database', async () => {
            const { status } = await request(server).post('/operators')
                .send({
                    name: 'Test Shop',
                    accessCode: 'floridakeys'
                })
            expect(status).toBe(200)
        })
    })

    describe('GET /operators', () => {
        it('returns 401 if the user is not authenticated', async () => {
            const { status } = await request(server).get('/operators')
            expect(status).toBe(401)
        })
        
        it('Returns 200 and a list of all operators', async () => {
            // Create a test operator
            await request(server).post('/operators')
                .send({
                    name: 'Test Shop',
                    accessCode: 'floridakeys'
                })

            // Create a user to generate an auth token
            const authUser = new User({
                name: 'test',
                email: 'a@a.a',
                password: 'tester'
            })
            await authUser.save()

            const { body, status } = await request(server)
                .get('/operators')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
            expect(body.length).toBe(1)
            expect(status).toBe(200)
        })
        
    })
})