import React from 'react'

const FilterMenu = props => {
  const { handleChange, selectedCategory } = props
  return (
    <form>
      <label>
        Filtered By Category:
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">Select</option>
          <option value="pill">Pill</option>
          <option value="shot">Shot</option>
        </select>
      </label>
    </form>
  )
}

export default FilterMenu
