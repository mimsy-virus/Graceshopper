/* global describe beforeEach it */

const { expect } = require('chai')
const Product = require('./product')

describe('Product model', () => {
  describe('Validations', () => {
    let product
    before(() => {
      product = Product.build()
    })
    describe('Validation for names', () => {
      it('requires name', async () => {
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
        try {
          product.name = ''
          await product.save()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
        }
      })
    })
    describe('Validation for descriptions', () => {
      it('requires description', async () => {
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
        try {
          product.description = ''
          await product.save()
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
        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed without `category`'
          )
        } catch (err) {
          expect(err.message).to.contain('category cannot be null')
        }
      })

      // it('requires category to be either pill or shot', async () => {
      //   product.name = 'abc medicine'
      //   product.description = 's12345'
      //   product.category = 'pill'
      //   await product.save()
      //   product.category = 'shot'
      //   await product.save()
      //   try {
      //     product.category = 'super'
      //     await product.save()
      //     throw Error(
      //       'validation was successful but should have failed if catogery is not either pill or shot'
      //     )
      //   } catch (err) {
      //     expect(err.message).to.contain('invalid input value')
      //   }
      // })
    })
  })
})
