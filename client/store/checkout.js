import axios from 'axios'

const defaultState = {
  subtotal: 0
}

//action type

const GET_SUBTOTAL = 'GET_SUBTOTAL'
const SET_SUBTOTAL = 'SET_SUBTOTAL'

//action creator

const getTheSubTotal = subtotal => ({ type: GET_SUBTOTAL, subtotal })
const setTheSubTotal = subtotal => ({ type: SET_SUBTOTAL, subtotal })

//thunk creator

export const getSubtotal = subtotal => async dispatch => {
  try {
    const { data } = await axios.put(
      `/api/orders/${subtotal.userId}`,
      subtotal.subtotal
    )
    dispatch(getTheSubTotal(data))
  } catch (err) {
    console.log(err)
  }
}

export const setSubtotal = subtotal => async dispatch => {
  try {
    const { data } = await axios.get(
      `/api/orders${subtotal.userId}`,
      subtotal.subtotal
    )
    dispatch(setTheSubTotal(data))
  } catch (err) {
    console.log(err)
  }
}
