import React, { useState, useEffect } from 'react';
import Country from '../Country';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

/**
* @author
* @function CountryList
**/

const CountryList = (props) => {
  const dispatch = useDispatch();
  //const filterByRegion = useSelector((state)=> state.filterByRegion);

  const countryList = useSelector((state)=> {
    //debugger;
    if(state.filterByRegion != ''){
      return state.countriesByRegion; 
    }
    if(state.countryListByName.lenght != 0){
      return state.countriesByRegion; 
    }
    return state.countryList;
  });

  console.log('Country List-->',countryList);

  useEffect(() => {

    fetch("https://restcountries.eu/rest/v2/all")
      .then((response)=>{ 
        return response.json()
      })
      .then(data=>{
        console.log('data=>', data);
        //setCountryList(data);
        dispatch({
          type:'SET_COUNTRY_LIST',
          payload: data
        });
      })
      .catch(err=>{
        console.log('Error::', err);
      })
  }, [])

  const onSelectRegion = (e) =>{
    const region = e.target.value;
    dispatch({
      type:'GET_COUNTRIES_BY_REGION',
      payload: region
    })

  }

  const onSelectedByName = ( event ) =>{
    console.log('Name:', event.target.value);
    const countryName = event.target.value;
    dispatch({
      type:'SEARCH_COUNTRIES_BY_NAME',
      placeholder: countryName
    })
  }

  return(
    <div className="cl-block">
      <div className="region-block">
        
        <select onChange={onSelectRegion} >
          <option selected hidden value="">Select Region:</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <br/>
      <div className="searchByName-block">
        <input type="text" placeholder="Search by name here !" onChange={onSelectedByName} />

      </div>
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