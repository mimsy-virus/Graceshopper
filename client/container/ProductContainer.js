import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import FilterMenu from '../components/FilterMenu'
import Search from '../components/Search'
import { getCurrentProduct } from '../store'

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: ''
    }
  }
  componentDidMount() {
    this.props.fetchProducts()
    //console.log(this.props)
  }

  handleChange = evt => {
    this.setState({
      selectedCategory: evt.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      !!this.props.productList.length && (
        <ProductsList title="Products">
          <FilterMenu handleChange={this.handleChange} {...this.state} />
          <Search />
          {this.props.productList.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked
            />
          ))}
        </ProductsList>
      )
    )
  }
}

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       imgUrl: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired,
//       category: PropTypes.string.isRequired
//     })
//   ).isRequired
// }

const mapStateToProps = state => ({
  productList: state.productList
})
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(getCurrentProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
