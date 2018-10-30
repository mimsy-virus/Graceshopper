import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const products1 = [
  {
    id: 1,
    name: 'hreyt',
    description: 'ehryetgebte',
    imgUrl: '',
    price: 188,
    qty: 5,
    categories: 'shot'
  },
  {
    id: 2,
    name: 'hreryryyt',
    description: 'euyutibte',
    imgUrl: '',
    price: 233,
    qty: 5,
    categories: 'pill'
  }
]

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product => (
      <ProductItem key={product.id} product={product} onAddToCartClicked />
    ))}
  </ProductsList>
)
//Rui Need to revisit this part when database works
// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       Quantity: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   addToCart: PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
  products: products1
})

export default connect(mapStateToProps)(ProductsContainer)
