import React from 'react'
import { connect } from 'react-redux'

export default class Form extends React.Component {
  render() {
    const handleSubmit = this.props.handleSubmit
    const handleChange = this.props.handleChange
    const data = this.props.data
    const dataKeys = Object.keys(data)
    const field = this.props.field

    const formEmpty = obj => {
      const values = Object.values(obj)
      let boolean = true
      values.map(arg => {
        if (!arg) {
          boolean = false
        }
      })
      return boolean
    }

    return (
      <div>
        <form className="ui error form" onSubmit={handleSubmit}>
          {dataKeys.map(elem => {
            return (
              <div className="field" key={`${field}${elem}`}>
                <label>{elem}:</label>
                <input
                  id={`${field} ${elem} input`}
                  type="text"
                  placeholder={`Enter ${elem}`}
                  className="form-control"
                  value={data[elem]}
                  onChange={handleChange}
                />
              </div>
            )
          })}
          <div className="ui error message">
            {formEmpty(data) === false && (
              <div className="content">
                <div className="header">Action Forbidden</div>
                <p>You can only submit form once all fields are filled.</p>
              </div>
            )}
          </div>
          <div className="ui center aligned container">
            <button
              className="ui center button"
              type="submit"
              disabled={!formEmpty(data)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
