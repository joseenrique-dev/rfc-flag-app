import React from 'react';
import Country from '../Country';

import './style.css';

/**
* @author
* @function CountryList
**/

const CountryList = (props) => {
  return(
    <div className="cl-block">
    <Country 
        flag="https://cdn1.iconfinder.com/data/icons/flags-of-the-world-set-1-1/100/.svg-6-512.png"
        name="Cuba"
        population="11 000 000"
        region="America Latina"
        capital="La Habana"
      />
    </div>
   )
  }


export default CountryList