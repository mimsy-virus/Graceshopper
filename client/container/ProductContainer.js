import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import FilterMenu from '../components/FilterMenu'
import Search from '../components/Search'
import { getCurrentProduct, addItemToServer } from '../store'
import SingleProduct from '../components/SingleProduct'

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

  handleClick = item => {
    this.props.addToCart(this.props.userId, item)
  }

  render() {
    return (
      !!this.props.productList.length && (
        <ProductsList title="Products">
          <FilterMenu handleChange={this.handleChange} {...this.state} />
          <Search />
          {this.props.productList.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              isLoggedIn={this.props.isLoggedIn}
              // onAddToCartClicked
              onClick={this.handleClick}
            />
          ))}
        </ProductsList>
      )
    )
  }
}

const mapStateToProps = state => ({
  productList: state.products.productList,
  isLoggedIn: !!state.user.id,
  userId: state.user.id
  // isAdmin : state.user.adimin
})
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(getCurrentProduct()),
  addToCart: (userId, item) => dispatch(addItemToServer(userId, item))

  // add a prop which can add the product into the cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
