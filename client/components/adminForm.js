import React from 'react'

const AdminForm = ({ handleChange, handleSubmit, data }) => {
  // const formEmpty = obj => {
  //   const values = Object.values(obj)
  //   let boolean = true
  //   values.map(arg => {
  //     if (!arg) {
  //       boolean = false
  //     }
  //   })
  //   return boolean
  // }

  // return (
  //   <div>
  //     <form className="ui error form" onSubmit={handleSubmit}>
  //       {dataKeys.map(elem => {
  //         return (
  //           <div className="field" key={`${field}${elem}`}>
  //             <label>{elem}:</label>
  //             <input
  //               id={`${elem}input`}
  //               type="text"
  //               placeholder={`Enter ${elem}`}
  //               className="form-control"
  //               value={data[elem]}
  //               onChange={handleChange}
  //             />
  //           </div>
  //         )
  //       })}
  //       <div className="ui error message">
  //         {formEmpty(data) === false && (
  //           <div className="content">
  //             <div className="header">Action Forbidden</div>
  //             <p>You can only submit form once all fields are filled.</p>
  //           </div>
  //         )}
  //       </div>
  //       <div className="ui center aligned container">
  //         <button
  //           className="ui center button"
  //           type="submit"
  //           disabled={!formEmpty(data)}
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // )
  console.log(data)
  return (
    <div>
      <form className="adminFormContainer" onSubmit={handleSubmit}>
        <div className="form-group">
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
