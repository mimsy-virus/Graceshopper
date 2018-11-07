import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import FilterMenu from '../components/FilterMenu'
import Search from '../components/Search'
import {
  getCurrentProduct,
  addItemToServer,
  getProductByCategory,
  getCartFromServer,
  updateItemToServer
} from '../store'
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
  }

  handleChange = evt => {
    this.setState({
      selectedCategory: evt.target.value
    })
    this.props.getCartFromServer()
  }

  handleClick = async item => {
    await this.props.getCartFromServer(this.props.userId)

    if (Object.keys(this.props.userCart).includes(Object.keys(item)[0])) {
      const idx = Object.keys(this.props.userCart).find(
        key => key === Object.keys(item)[0]
      )
      const inputqty = Object.values(item)[0]
      const curqty = this.props.userCart[idx]
      const newqty = curqty + Number(inputqty)
      await this.props.updateItem(this.props.userId, { [idx]: newqty })
    } else {
      await this.props.addToCart(this.props.userId, item)
    }

    this.routeChange()
  }

  routeChange() {
    // redirect to list of items after completed
    let path = `/cart`
    this.props.history.push(path)
  }

  render() {
    return (
      !!this.props.productList.length && (
        <ProductsList title="Products">
          <FilterMenu handleChange={this.handleChange} {...this.state} />
          <Search />
          <div role="list" className="ui selection middle aligned list">
            {this.props.productList.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                isLoggedIn={this.props.isLoggedIn}
                onClick={this.handleClick}
                props={this.props}
              />
            ))}
          </div>
        </ProductsList>
      )
    )
  }
}

const mapStateToProps = state => ({
  productList: state.products.productList,
  isLoggedIn: !!state.user.id,
  userId: state.user.id,
  selectedProducts: state.selectedProducts,
  userCart: state.cart.userCart
})
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(getCurrentProduct()),
  addToCart: (userId, item) => dispatch(addItemToServer(userId, item)),
  getProductByCategory: category => dispatch(getProductByCategory(category)),
  getCartFromServer: userId => dispatch(getCartFromServer(userId)),
  updateItem: (userId, item) => dispatch(updateItemToServer(userId, item))

  // add a prop which can add the product into the cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
