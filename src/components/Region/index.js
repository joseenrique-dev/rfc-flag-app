import React from 'react'
import { useDispatch } from 'react-redux';
import './style.css';

/**
* @author
* @function Region
**/

export const Region = (props) => {
    const dispatch = useDispatch();
    
    const onSelectRegion = (e) =>{
        const region = e.target.value;
        dispatch({
          type:'GET_COUNTRIES_BY_REGION',
          payload: region
        })
    
      }

  return(
    <div className="region-block">        
        <select onChange={onSelectRegion} >
            <option disabled selected>Select Region:</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
   )

 }