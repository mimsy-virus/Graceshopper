import axios from 'axios'

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

// INITIAL STATE
const defaultProducts = {
  productList: []
}

//ACTION CREATORS
const getProducts = product => ({ type: GET_PRODUCTS, product })

const addProduct = product => ({ type: ADD_PRODUCT, product })

const removeProduct = (product, id) => ({
  type: REMOVE_PRODUCT,
  product,
  productid: id
})

const updateProduct = (product, id) => ({
  type: UPDATE_PRODUCT,
  product,
  productid: id
})

//THUNK CREATORS

export const getCurrentProduct = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/products')
    dispatch(getProducts(data))
  } catch (err) {
    console.log(err)
  }
}

export const addNewProduct = product => async dispatch => {
  try {
    const { data } = await axios.post('/api/products', product)
    dispatch(addProduct(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateAProduct = (product, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/products/${id}`, product)
    dispatch(updateProduct(data, id))
  } catch (err) {
    console.log(err)
  }
}

export const removeAProduct = id => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`)
    dispatch(removeProduct(data, id))
  } catch (err) {
    console.log(err)
  }
}

//REDUCER

const newProductList = (array, filterId) => {
  return array.filter(elem => elem.id !== filterId)
}

export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { productList: action.product }

    case ADD_PRODUCT:
      return { productList: [...state, action.product] }

    case UPDATE_PRODUCT:
      return {
        productList: [
          ...newProductList(state, action.productid),
          action.product
        ]
      }

    case REMOVE_PRODUCT:
      return { productList: [...newProductList(state, action.productid)] }

    default:
      return state
  }
}
