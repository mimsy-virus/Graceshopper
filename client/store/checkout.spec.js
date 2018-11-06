import { expect } from 'chai'
import { getSubtotal, setSubtotal } from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { subtotal: 0 }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('setSubtotal : ', () => {
    it('SET user subtotal and updates subtotal on store', async () => {
      const testsubtotal = 399
      mockAxios.onGet('/api/cart/1').replyOnce(200, testsubtotal)
      await store.dispatch(setSubtotal({ 1: 399 }))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('SET_SUBTOTAL')
      expect(actions[0].subtotal).to.be.deep.equal(testsubtotal)
    })
  })

  // describe('addItemToServer', () => {
  //   it('add item to user cart and POST to server', async () => {
  //     const testItem = { 1: 2 }
  //     mockAxios.onPost('/api/cart/1').replyOnce(200, testItem)
  //     await store.dispatch(addItemToServer(1, testItem))
  //     const actions = store.getActions()
  //     expect(actions[0].type).to.be.equal('ADD_ITEM')
  //     expect(actions[0].itemId).to.be.deep.equal(Object.keys(testItem)[0])
  //     expect(actions[0].itemQty).to.be.deep.equal(Object.values(testItem)[0])
  //   })
  // })

  // describe('updateItemToServer', () => {
  //   it('update an item quantity and PUT to server', async () => {
  //     const testItem = { 1: 3 }
  //     mockAxios.onPut('/api/cart/1').replyOnce(200, testItem)
  //     await store.dispatch(updateItemToServer(1, testItem))
  //     const actions = store.getActions()
  //     expect(actions[0].type).to.be.equal('UPDATE_ITEM')
  //     expect(actions[0].itemId).to.be.deep.equal(Object.keys(testItem)[0])
  //     expect(actions[0].itemQty).to.be.deep.equal(Object.values(testItem)[0])
  //   })
  // })

  // describe('removeItemFromServer', () => {
  //   it('removes an item from cart and DELETE from server', async () => {
  //     mockAxios.onDelete('/api/cart/1/2').replyOnce(200)
  //     await store.dispatch(removeItemFromServer(1, 2))
  //     const actions = store.getActions()
  //     expect(actions[0].type).to.be.equal('REMOVE_ITEM')
  //     expect(actions[0].itemId).to.be.equal(2)
  //   })
  // })

  // describe('clearCartFromServer', () => {
  //   it('removes all items from cart and DELETE from server', async () => {
  //     mockAxios.onDelete('/api/cart/clear/delete/1').replyOnce(200)
  //     await store.dispatch(clearCartFromServer(1))
  //     const actions = store.getActions()
  //     expect(actions[0].type).to.be.equal('CLEAR_CART')
  //   })
  // })
})
