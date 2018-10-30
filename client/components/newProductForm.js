import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewProduct } from '../store/product'
import Form from './adminForm'

class NewProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: {
        name: '',
        description: '',
        imgUrl: '',
        price: '',
        quantity: '',
        category: ''
      }
    }
  }

  handleChange() {
    const name = document.getElementById('new product name input')
    const description = document.getElementById('new product description input')
    const imgUrl = document.getElementById('new product imgUrl input')
    const price = document.getElementById('new product price input')
    const quantity = document.getElementById('new product quantity input')
    const category = document.getElementById('new product category input')
    this.setState({
      newProduct: [name, description, imgUrl, price, quantity, category]
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newProduct = this.state.newProduct
    this.props.addNewproduct(newProduct)
    this.routeChange()
  }

  routeChange() {
    let path = `/`
    this.props.history.push(path)
  }

  render() {
    return (
      <div>
        <div className="ui center aligned container">
          <h1>Add new Product:</h1>
        </div>
        <Form
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          data={this.state.newProduct}
          field="new product"
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: product => {
      dispatch(addNewProduct(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewProductForm)
