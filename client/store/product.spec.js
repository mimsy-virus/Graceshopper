/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import { getASingleProduct } from './product'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { singleProduct: {} }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getCurrentProduct', () => {
    it('GET a Product from server via Id and updates product on store', async () => {
      const testSingleProduct = [
        {
          name: 'Glycerine',
          description: 'S92002S',
          imageUrl: 'http://dummyimage.com/165x125.bmp/ff4444/ffffff',
          price: 9.99,
          quantity: 10,
          category: 'pill'
        }
      ]
      mockAxios.onGet('/api/products/1').replyOnce(200, testSingleProduct)
      await store.dispatch(getASingleProduct(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(testSingleProduct)
    })
  })
})
