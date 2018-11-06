import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY'

//INITIAL STATE
const defaultSingleProduct = {
  singleProduct: {},
  selectedProducts: {}
}

//ACTION CREATORS
const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product })
const getProductCategory = products => ({
  type: GET_PRODUCT_CATEGORY,
  products
})

//THUNK CREATORS
export const getASingleProduct = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch(getSingleProduct(data))
  } catch (err) {
    console.log(err)
  }
}

export const getProductByCategory = category => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/category/${category}`)
    dispatch(getProductCategory(data))
  } catch (err) {
    console.log(err)
  }
}

//REDUCER
export default function(state = defaultSingleProduct, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.product
      }
    case GET_PRODUCT_CATEGORY:
      return {
        ...state,
        selectedProducts: action.products
      }

    default:
      return state
  }
}
