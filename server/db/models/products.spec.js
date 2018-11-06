/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Product = require('./product')

// describe('Product model', () => {
//   beforeEach(() => {
//     return db.sync({ force: true })
//   })

//   describe('validation', () => {
//     describe('have a name and a description', () => {
//       let product1

//       beforeEach(async () => {
//         try {
//           product1 = await Product.create({
//             name: 'abcyline',
//             description: 'super drug'
//           })
//         } catch (err) {
//           throw err
//         }
//       })

//       console.log(product1)
//       expect(product1.name).to.equal('abcyline')
//       expect(product1.description).to.equal('super drug')
//     }) // end describe('correctPassword')
//   }) // end describe('instanceMethods')
// }) // end describe('User model')

describe('Product model', () => {
  describe('Validations', () => {
    describe('Validation for names', () => {
      it('requires name', async () => {
        const product = Product.build()

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed without `name`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })

      it('requires name to not be an empty string', async () => {
        const product = Product.build({
          name: ''
        })

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
          /* handle error */
        }
      })
    })
    describe('Validation for descriptions', () => {
      it('requires description', async () => {
        const product = Product.build()

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed without `description`'
          )
        } catch (err) {
          expect(err.message).to.contain('description cannot be null')
        }
      })

      it('requires description to not be an empty string', async () => {
        const product = Product.build({
          description: ''
        })

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
        }
      })
    })
    describe('Validation for categories', () => {
      it('requires category', async () => {
        const product = Product.build()
        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed without `category`'
          )
        } catch (err) {
          expect(err.message).to.contain('category cannot be null')
        }
      })

      it('requires category to be either pill or shot', async () => {
        const product = Product.build({
          name: 'testDrug',
          description: 'super drug',
          category: 'sleep'
        })
        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed if catogery is not either pill or shot'
          )
        } catch (err) {
          expect(err.message).to.contain('invalid input value')
        }
      })
    })
  })
})
