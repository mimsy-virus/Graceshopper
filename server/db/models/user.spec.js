/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('Validations', () => {
    let user
    before(() => {
      user = User.build()
    })

    describe('correctPassword', () => {
      let cody
      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
    describe('Email validation', () => {
      it('requires email to be a valid email address', async () => {
        try {
          user.email = 'notAEmail'
          await user.validate()
          throw Error(
            'validation was successful but should have failed without valide `email`'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation isEmail on email failed')
        }
      })
    })
  }) // end describe('instanceMethods')
}) // end describe('User model')
