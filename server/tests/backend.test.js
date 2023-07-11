require('dotenv').config()
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const BEARER = process.env.BEARER

describe('BASIC TESTS', () => {

  test('api returns the expected data type', async () => {
    const response = await api
      .get('/api/doorstatus')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(typeof response.body).toBe('boolean')
  })

  test('posting status works', async () => {
    const response = await api
      .post('/api/doorstatus')
      .send({ 'status': false })
      .set('Authorization', `bearer ${BEARER}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toBe(false)
  })

  test('api returns correct value', async () => {
    const response = await api
      .get('/api/doorstatus')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toBe(false)
  })

})

describe('SECURITY TESTS', () => {

  test('api does not accept random json', async () => {
    await api
      .post('/api/doorstatus')
      .send({ 'status': 'kissa' })
      .set('Authorization', `bearer ${BEARER}`)
      .expect(400)
  })

  test('api does not accept posts without correct token', async () => {
    await api
      .post('/api/doorstatus')
      .send({ 'status': 'kissa' })
      .set('Authorization', 'bearer NOTREALTOKEN')
      .expect(401)
  })

})