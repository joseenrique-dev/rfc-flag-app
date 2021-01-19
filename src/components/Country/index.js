import React from 'react'
import './style.css';

/**
* @author
* @function Country
**/

const Country = (props) => {
    const {
        flag,
        name,
        population,
        region,
        capital
    } = props;
  return(
    <div className="card-box">
        <img src={ flag } alt=""/>
        <div className="details">
            <h2>{ name }</h2> 
            <p><strong>Population:</strong> { population }</p>
            <p><strong>Region:</strong> { region }</p>
            <p><strong>Capital:</strong> { capital }</p>
        </div>
    </div>
   )
  }


export default Country