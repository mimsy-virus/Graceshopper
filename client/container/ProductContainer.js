import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import FilterMenu from '../components/FilterMenu'
import Search from '../components/Search'

const products1 = [
  {
    id: 1,
    name: 'hreyt',
    description: 'ehryetgebte',
    imgUrl:
      'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
    price: 188,
    qty: 5,
    categories: 'shot'
  },
  {
    id: 2,
    name: 'hreryryyt',
    description: 'euyutibte',
    imgUrl:
      'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
    price: 233,
    qty: 5,
    categories: 'pill'
  }
]

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: ''
    }
  }

  handleChange = evt => {
    this.setState({
      selectedCategory: evt.target.value
    })
  }

  render() {
    const { selectedCategory } = this.state
    const products = selectedCategory
      ? this.props.products.filter(product => {
          console.log(product.categories)
          console.log(selectedCategory)
          return product.categories === selectedCategory
        })
      : this.props.products
    console.log(products)
    return (
      <ProductsList title="Products">
        <FilterMenu handleChange={this.handleChange} {...this.state} />
        <Search />
        {products.map(product => (
          <ProductItem key={product.id} product={product} onAddToCartClicked />
        ))}
      </ProductsList>
    )
  }
}

// const ProductsContainer = ({ products }) => (
//   <ProductsList title="Products">
//     {products.map(product => (
//       <ProductItem key={product.id} product={product} onAddToCartClicked />
//     ))}
//   </ProductsList>
// )
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
