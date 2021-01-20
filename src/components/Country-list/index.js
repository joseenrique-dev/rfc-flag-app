import React, { useState, useEffect } from 'react';
import Country from '../Country';
import { useSelector } from 'react-redux';

import './style.css';

/**
* @author
* @function CountryList
**/

const CountryList = (props) => {
  const [countryList, setCountryList] = useState([]);
  const state = useSelector(state=> state);
  console.log('General State-->',state)

  useEffect(() => {

    fetch("https://restcountries.eu/rest/v2/all")
      .then((response)=>{ return response.json()})
      .then(data=>{
        console.log('data=>', data);
        setCountryList(data);
      })
      .catch(err=>{
        console.log('Error::', err);
      })
  }, [])

  return(
    <div className="cl-block">
    {
      countryList.map(({name,region, capital, population,flag})=>{
        return (
          <Country 
            key={name}
            flag={ flag }
            name={ name }
            population={ population }
            region={ region }
            capital={ capital }
          />
        )
        
      })
    }
    
    </div>
   )
  }


export default CountryList