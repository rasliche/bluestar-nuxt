const request = require('supertest')

describe('/user/:userId/scores routes', () => {
    let server

    beforeEach(async() => {
        server = require('../../index')
    })
    
    afterEach(async () => {
        server.close()
    })

    describe('GET /user/:userId/scores/', () => {  
        it('returns 422 if the user info provided is invalid', async () => {
            const { body, status } = await request(server)
                .get('/user//scores/')
            expect(status).toBe(422)
        })
        
        it.todo('returns 401 if the user is not authenticated')
        
        it('returns 404 if the user is not found', async () => {
            const { body, status } = await request(server)
            .get('/user/asdfsd/scores/')
            expect(status).toBe(404)
        })

        it.todo('returns 200 when all of a user\'s QuizResults are returned')
    })
    
    describe('GET /user/:userId/scores/:uuid', () => {  
        it.todo('returns 422 if the user info provided is invalid')
        it.todo('returns 422 if the uuid info provided is invalid')
        it.todo('returns 401 if the user is not authenticated')
        it.todo('returns 404 if a QuizResult is not found for given user or uuid')
        it.todo('returns 200 if a QuizResult is returned')
    })

    describe('POST /user/:userId/scores/:uuid', () => {
        it.todo('returns 422 if the user info provided is invalid')
        it.todo('returns 422 if the uuid info provided is invalid')
        it.todo('returns 401 if the user is not authenticated')
        it.todo('returns 404 if a QuizResult is not found for given user or uuid')
        it.todo('returns 201 if a QuizResult is created')
        it.todo('returns 204 if a QuizResult is returned')
    })
})