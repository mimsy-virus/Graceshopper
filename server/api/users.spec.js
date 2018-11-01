/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes when user is admin', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(401)
      expect(res.body).not.to.be.an('array')
      //expect(res.body[0].email).not.to.be.equal(codysEmail)
    })

    it('GET /api/users/:id', async () => {
      const res = await request(app)
        .get('/api/users/1')
        .expect(401)

      expect(res.body).not.to.be.an('object')
      //expect(res.body[0].email).not.to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
