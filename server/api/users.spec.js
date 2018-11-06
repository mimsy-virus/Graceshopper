/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })
  const adminCredentials = {
    email: 'sponge@bob.com',
    password: 'thePassword1',
    isAdmin: true
  }
  const regularUserCredentials = {
    email: 'cody@puppybook.com',
    password: 'thePassword2'
  }

  // beforeEach(async () => {
  //   const adminResponseTest = await User.create(adminCredentials)
  //   const regularResponseTest = await User.create(regularUserCredentials)
  //   expect(adminResponseTest.statusCode).to.equal(200)
  //   expect(regularResponseTest.statusCode).to.equal(200)
  // })

  describe('/api/users/', () => {
    const regularUser = request.agent(app)
    const adminUser = request.agent(app)

    before(done => {
      adminUser
        .post('/auth/login')
        .send({
          email: 'brrp@email.com',
          password: '123'
        })
        .end(function(err, response) {
          expect(response.statusCode).to.equal(200)
          if (err) throw err
          done()
        })
    })

    describe('GET /api/users', () => {
      it('gives Admin users access', async () => {
        console.log('!!!!', adminUser)
        const res = await adminUser
          .get('/api/users')
          .expect('Content-Type', /json/)
          .expect(200)
        console.log('!!!!', res)
        expect(res.body).to.be.an.instanceOf(Array)
        expect(res.body).to.have.length(2)
      })
    })

    // it('GET /api/users', async () => {
    //   const res = await request(app)
    //     .get('/api/users')
    //     .expect(200)

    //   expect(res.body).to.be.an('array')
    //   expect(res.body[0].email).to.be.equal(codysEmail)
    // })
  }) // end describe('/api/users')
}) // end describe('User routes')
