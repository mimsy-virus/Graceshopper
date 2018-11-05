/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { getCurrentProduct, addNewProduct } from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { productList: [] }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getCurrentProduct', () => {
    it('GET Products and updates productlist on store', async () => {
      const testProductList = [
        {
          name: 'Glycerine',
          description: 'S92002S',
          imageUrl: 'http://dummyimage.com/165x125.bmp/ff4444/ffffff',
          price: 9.99,
          quantity: 10,
          category: 'pill'
        },
        {
          name: 'Lithium Carbonate',
          description: 'M1A08',
          imageUrl: 'http://dummyimage.com/177x130.jpg/ff4444/ffffff',
          price: 9.99,
          quantity: 10,
          category: 'pill'
        }
      ]
      mockAxios.onGet('/api/products').replyOnce(200, testProductList)
      await store.dispatch(getCurrentProduct())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].product).to.be.deep.equal(testProductList)
    })
  })

  describe('addProduct', () => {
    it('Add new Product, calls PUT to server', async () => {
      const testNewProductList = {
        name: 'Glycerine',
        description: 'S92002S',
        imageUrl: 'http://dummyimage.com/165x125.bmp/ff4444/ffffff',
        price: 9.99,
        quantity: 10,
        category: 'pill'
      }
      mockAxios.onPost('/api/products').replyOnce(200, testNewProductList)
      await store.dispatch(addNewProduct(testNewProductList))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ADD_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(testNewProductList)
    })
  })
})
