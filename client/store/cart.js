import axios from 'axios'
import { runInNewContext } from 'vm'

//ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART = 'CLEAR_CART'
const UPDATE_ITEM = 'UPDATE_ITEM'

// INITIAL STATE
const defaultCart = {
  userCart: {}
}

//ACTION CREATORS
const getCartAction = cart => ({ type: GET_CART, cart })

const addItemAction = item => ({
  type: ADD_ITEM,
  itemId: Object.keys(item)[0],
  itemQty: Object.values(item)[0]
})

const updateItemAction = item => ({
  type: UPDATE_ITEM,
  itemId: Object.keys(item)[0],
  itemQty: Object.values(item)[0]
})

const removeItemAction = itemId => ({ type: REMOVE_ITEM, itemId })

const clearCartAction = () => ({ type: CLEAR_CART })

//THUNK CREATOR
export const getCartFromServer = userId => async dispatch => {
  try {
    const { data } = await axios.get(`api/cart/${userId}`)
    dispatch(getCartAction(data))
  } catch (err) {
    console.log(err)
  }
}

export const addItemToServer = (userId, item) => async dispatch => {
  try {
    const { data } = await axios.post(`api/cart/${userId}`, item)
    dispatch(addItemAction(data))
  } catch (err) {
    console.log(err)
  }
  dispatch(addItemAction(item))
}

export const updateItemToServer = (userId, item) => async dispatch => {
  try {
    const { data } = await axios.put(`api/cart/${userId}`, item)
    dispatch(updateItemAction(data))
  } catch (err) {
    console.log(err)
  }
}

export const removeItemFromServer = (userId, itemId) => async dispatch => {
  try {
    const { data } = await axios.delete(`api/cart/${userId}/${itemId}`)
    dispatch(removeItemAction(Object.keys(data)[0]))
  } catch (err) {
    console.log(err)
  }
}

export const clearCartFromServer = userId => async dispatch => {
  try {
    const { data } = await axios.delete(`api/cart/${userId}`)
    dispatch(clearCartAction())
  } catch (err) {
    console.log(err)
  }
}

//REDUCER
export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return { userCart: action.cart }

    case ADD_ITEM:
      return {
        userCart: { ...state.userCart, [action.itemId]: action.itemQty }
      }

    case UPDATE_ITEM:
      return {
        userCart: { ...state.userCart, [action.itemId]: action.itemQty }
      }

    case REMOVE_ITEM:
      delete state.userCartCart[action.itemId]
      return {
        userCart: state.userCart
      }

    case CLEAR_CART:
      return {
        userCart: {}
      }

    default:
      return state
  }
}
