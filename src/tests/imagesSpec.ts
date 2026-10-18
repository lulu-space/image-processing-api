import request from 'supertest'
import app from '../index'

describe('Images Endpoint', () => {
  it('returns 200 for valid request', async () => {
    const response = await request(app).get(
      '/api/images?filename=fjord&width=200&height=200'
    )
    expect(response.status).toBe(200)
  })

  it('returns 400 for missing params', async () => {
    const response = await request(app).get('/api/images')
    expect(response.status).toBe(400)
  })
})
