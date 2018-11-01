import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

//INITIAL STATE
const defaultSingleProduct = {
  singleProduct: {}
}

//ACTION CREATORS
const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product })

//THUNK CREATORS
export const getASingleProduct = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch(getSingleProduct(data))
  } catch (err) {
    console.log(err)
  }
}

//REDUCER
export default function(state = defaultSingleProduct, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return {
        singleProduct: action.product
      }

    default:
      return state
  }
}
