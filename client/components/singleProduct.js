import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import { getASingleProduct } from '../store/products.js'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleProduct: {}
    }
  }

  componentDidMount() {
    // console.log('paramsid:', typeof this.props.match.params.id)
    // console.log('THIS IS THE SINGLE PRODUCT IN PROPS', this.props.singleProduct)
    this.props.getSingleProduct(this.props.match.params.id)
    this.setState({ singleProduct: this.props.singleProduct })
    // console.log('GETTING TO END OF COMPONENT MOUNTING')
  }

  handleChange() {}
  handleSubmit() {}

  render() {
    // console.log(this.props.singleProduct)
    // if (this.state.singleProduct) {
    // console.log('RERENDERING')
    return <ProductItem product={this.props.singleProduct} />
    // } else return ''
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.product.singleProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => dispatch(getASingleProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
