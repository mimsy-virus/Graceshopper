import React from 'react'

const AdminForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <div>
      <form className="adminFormContainer" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            placeholder="Enter a name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control"
            placeholder="Enter description"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            className="form-control"
            placeholder="Enter imgUrl"
            type="text"
            name="imgUrl"
            value={data.imgUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control"
            placeholder="Enter price"
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control"
            placeholder="Enter quantity"
            type="number"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Categories:</label>
          <input
            className="form-control"
            placeholder="Enter categories"
            name="category"
            type="text"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          SUBMIT!
        </button>
      </form>
    </div>
  )
}

export default AdminForm
