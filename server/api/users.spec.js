// /* global describe beforeEach it */

// const { expect } = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = require('../db/models/user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({ force: true })
//   })
//   const adminCredential = {
//     email: 'sponge@bob.com',
//     password: 'thePassword1',
//     isAdmin: true
//   }

//   const regularCredential = {
//     email: 'cody@puppybook.com',
//     password: 'thePassword2'
//   }

//   beforeEach(async () => {
//     try {
//       const adminUser = await User.create(adminCredential)
//       const regularUser = await User.create(regularCredential)
//     } catch (err) {
//       throw err
//     }
//   })

//   const loggedInRegularUser = request.agent(app)
//   const loggedInAdminUser = request.agent(app)
//   describe('/api/users/', () => {
//     before(async () => {
//       try {
//         const response = await loggedInAdminUser.post('/auth/login').send({
//           email: 'sponge@bob.com',
//           password: 'thePassword1'
//         })
//         console.log('!!!!!!', response.body)
//         expect(response.statusCode).to.equal(200)
//       } catch (err) {
//         throw err
//       }
//     })
//     describe('GET /api/users', async () => {
//       const response = await loggedInAdminUser.get('/api/users').expect(200)
//       expect(response.body.length).to.equal(8)
//     })
//   })

//   describe('Regular user GET /api/users', () => {
//     before(async () => {
//       try {
//         const response = await loggedInRegularUser.post('/auth/login').send({
//           email: 'cody@puppybook.com',
//           password: 'thePassword2'
//         })
//         //console.log('!!!!!!', response.body)
//         expect(response.statusCode).to.equal(200)
//       } catch (err) {
//         throw err
//       }
//     })
//     it('Not allow regular user to get users info', async () => {
//       const response = await loggedInRegularUser.get('/api/users').expect(401)
//     })
//   })
// })
