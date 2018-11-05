/* global describe beforeEach afterEach it */

import { expect } from 'chai'
import {
  getCartFromServer,
  addItemToServer,
  updateItemToServer,
  removeItemFromServer,
  clearCartFromServer
} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { userCart: {} }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getCartFromServer', () => {
    it('GET user cart and updates cart on store', async () => {
      const testCart = { 1: 2, 2: 1, 3: 5 }
      mockAxios.onGet('/api/cart/1').replyOnce(200, testCart)
      await store.dispatch(getCartFromServer(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CART')
      expect(actions[0].cart).to.be.deep.equal(testCart)
    })
  })

  describe('addItemToServer', () => {
    it('add item to user cart and POST to server', async () => {
      const testItem = { 1: 2 }
      mockAxios.onPost('/api/cart/1').replyOnce(200, testItem)
      await store.dispatch(addItemToServer(1, testItem))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ADD_ITEM')
      expect(actions[0].itemId).to.be.deep.equal(Object.keys(testItem)[0])
      expect(actions[0].itemQty).to.be.deep.equal(Object.values(testItem)[0])
    })
  })

  describe('updateItemToServer', () => {
    it('update an item quantity and PUT to server', async () => {
      const testItem = { 1: 3 }
      mockAxios.onPut('/api/cart/1').replyOnce(200, testItem)
      await store.dispatch(updateItemToServer(1, testItem))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('UPDATE_ITEM')
      expect(actions[0].itemId).to.be.deep.equal(Object.keys(testItem)[0])
      expect(actions[0].itemQty).to.be.deep.equal(Object.values(testItem)[0])
    })
  })

  describe('removeItemFromServer', () => {
    it('removes an item from cart and DELETE from server', async () => {
      const specialStore = mockStore({ userCart: { 1: 2, 2: 1, 3: 5 } })
      mockAxios.onDelete('/api/cart/1/2').replyOnce(200)
      await specialStore.dispatch(removeItemFromServer(1, 2))
      const actions = specialStore.getActions()
      expect(actions[0].type).to.be.equal('REMOVE_ITEM')
      expect(specialStore.getState()).to.be.deep.equal({ 1: 2, 3: 5 })
    })
  })

  xdescribe('clearCartFromServer', () => {
    it('removes all items from cart and DELETE from server', async () => {
      const specialStore = mockStore({ userCart: { 1: 2, 2: 1, 3: 5 } })
      mockAxios.onGet('/api/cart/clear/delete/1').replyOnce(200)
      await specialStore.dispatch(clearCartFromServer(1))
      const actions = specialStore.getActions()
      expect(actions[0].type).to.be.equal('CLEAR_CART')
      expect(specialStore.getState().userCart).to.be.deep.equal({})
    })
  })
})
