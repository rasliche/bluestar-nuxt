const request = require('supertest')
// const Operator = require('../../models/operator')
const User = require('../../models/User')

describe('/auth routes', () => {
    let server
    let authUser
    let adminUser
    beforeEach(async() => {
        server = require('../../index')
        // // Create a user to generate an auth token
        // authUser = new User({
        //     name: 'test',
        //     email: 'user@user.user',
        //     password: 'tester'
        // })

        // adminUser = new User({
        //     name: 'test admin',
        //     email: 'admin@admin.admin',
        //     password: 'tester',
        //     roles: { admin: true }
        // })

        // await authUser.save(),
        // await adminUser.save()
    })
    
    afterEach(async () => {
        // await User.deleteMany({})
        server.close()
    })

    describe('POST /auth/login', () => {  
        it.todo('returns 422 if the credentials are invalid')
        it.todo('returns 404 if the user is not found')
        it.todo('returns 400 if password is incorrect for given email')
        it.todo('returns 200 and a token if the login is successful')
    })
    
    describe('POST /auth/admin', () => {  
        it.todo('returns 422 if the credentials are invalid')
        it.todo('returns 400 if the user already exists')
        it.todo('returns 201 if the admin registration is successful')

    })

    describe('POST /auth/manager', () => {
        it.todo('what should this do? Is this how signup flow works?')
    })
})