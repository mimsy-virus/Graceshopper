import axios from 'axios'

const GET_ORDER_FOR_USER = 'GET_ORDER_FOR_USER'

export const getOrderForUser = orders => ({ type: GET_ORDER_FOR_USER, orders })

export const fetchOrdersForUser = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/history`)
    console.log(data)
    dispatch(getOrderForUser(data))
  } catch (err) {
    console.log(err)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDER_FOR_USER:
      return action.orders
    default:
      return state
  }
}
export default reducer
