import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewProduct } from '../store/product'
import AdminForm from './AdminForm'

class NewProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      imgUrl: '',
      price: 0,
      quantity: 0,
      category: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // const name = document.getElementById('nameInput')
    // const description = document.getElementById('descriptionInput')
    // const imgUrl = document.getElementById('imgUrlInput')
    // const price = document.getElementById('priceInput')
    // const quantity = document.getElementById('quantityInput')
    // const category = document.getElementById('categoryInput')
    // this.setState({
    //   newProduct: { name, description, imgUrl, price, quantity, category }
    // })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newProduct = this.state
    this.props.addNewProduct(newProduct)
    this.routeChange()
  }

  routeChange() {
    // redirect to list of items after completed
    let path = `/`
    this.props.history.push(path)
  }

  render() {
    console.log('this is props in newProductForm:', this.props)
    return (
      <div>
        <div className="ui center aligned container">
          <h1>Add new Product:</h1>
        </div>
        <AdminForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
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
