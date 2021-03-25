const request = require('supertest')
const Operator = require('../../models/operator')
const User = require('../../models/User')

describe('/operators', () => {
    let server
    let testOperatorOne, testOperatorTwo, authUser, adminUser;
    beforeEach(async() => {
        server = require('../../index')
        // Create a test operator
        testOperatorOne = new Operator({
            name: 'Test Shop 1',
            // accessCode: 'floridakeys'
        })
        testOperatorTwo = new Operator({
            name: 'Test Shop 2',
            // accessCode: 'floridakeys'
        })

        // Create a user to generate an auth token
        authUser = new User({
            name: 'test',
            email: 'a@a.a',
            password: 'tester'
        })

        adminUser = new User({
            name: 'test',
            email: 'admin@admin.admin',
            password: 'tester',
            roles: { admin: true }
        })

        await Promise.all([
            testOperatorOne.save(),
            testOperatorTwo.save(),
            authUser.save(),
            adminUser.save()
        ])
    })
    
    afterEach(async() => {
        await User.deleteMany()
        await Operator.deleteMany()
        server.close()
    })

    describe('POST /operators', () => {
        it('returns 401 if the user is not authenticated', async () => {
            const { status } = await request(server).post('/operators')
                .send({
                    name: 'Test Shop A',
                    accessCode: 'floridakeys'
                })
            expect(status).toBe(401)
        })

        it('returns 403 if user is not an admin', async () => {
            const { status } = await request(server).post('/operators')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
                .send({
                    name: 'Test Shop B',
                    accessCode: 'floridakeys'
                })
                expect(status).toBe(403)
            })
            
            it('returns 200 if the operator is successfully added to database', async () => {
                const { status } = await request(server).post('/operators')
                .set('Authorization', `Bearer ${adminUser.generateAuthToken()}`)
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
            const { body, status } = await request(server)
                .get('/operators')
                .set('Authorization', `Bearer ${authUser.generateAuthToken()}`)
            expect(body.length).toBe(2)
            expect(status).toBe(200)
        })
    })
})