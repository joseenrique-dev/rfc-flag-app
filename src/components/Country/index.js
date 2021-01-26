import React from 'react'
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
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
    const history = useHistory();
    const handleGoToCountry = () =>{
        history.push(`/country/${slugify(name)}`);
    }
  return(
    <div className="card-box" onClick={handleGoToCountry}>
        <img src={ flag } loading="lazy" alt=""/>
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