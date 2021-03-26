const request = require('supertest')

describe('/auth routes', () => {
    let server

    beforeEach(async() => {
        server = require('../../index')
    })
    
    afterEach(async () => {
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