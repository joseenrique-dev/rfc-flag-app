import React from 'react'
import './style.css';
/**
* @author
* @function InputSearch
**/

const InputSearch = ({ ...props }) => {
  return(
    <label className="input-box">
      <i className="fas fa-search" />
      <input type="text" {...props} />
    </label>
   )

 }

export default InputSearch