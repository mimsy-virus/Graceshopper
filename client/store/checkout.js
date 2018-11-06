import axios from 'axios'

const defaultState = {
  subtotal: 0
}

//action type

const GET_SUBTOTAL = 'GET_SUBTOTAL'
const SET_SUBTOTAL = 'SET_SUBTOTAL'

//action creator

const getTheSubTotal = payload => ({ type: GET_SUBTOTAL, payload })
const setTheSubTotal = subtotal => ({ type: SET_SUBTOTAL, subtotal })

//thunk creator

export const getASubtotal = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/orders/${userId}`)
    const subtotal = Number(data[data.length - 1].subTotal)

    dispatch(getTheSubTotal(subtotal))
  } catch (err) {
    console.log(err)
  }
}

export const setSubtotal = subtotal => async dispatch => {
  try {
    const { data } = await axios.put(`/api/orders/${subtotal.userId[0]}`, {
      subTotal: subtotal.subtotal
    })
    dispatch(setTheSubTotal(data))
  } catch (err) {
    console.log(err)
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SUBTOTAL:
      return { ...state, subtotal: action.payload }
    case SET_SUBTOTAL:
      return { ...state, subtotal: action.subtotal }
    default:
      return state
  }
}

export default reducer
