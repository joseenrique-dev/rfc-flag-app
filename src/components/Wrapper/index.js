import React from 'react'
import './style.css';

/**
* @author
* @function Wrapper
**/

const Wrapper = ({children}) => {
  return(
    <div className='wrappper'>
        {
            children
        }
    </div>
   )

 }

export default Wrapper