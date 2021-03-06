import React, { useEffect } from 'react';
import Country from '../Country';
import { useSelector, useDispatch } from 'react-redux';
import ActionList from '../ActionList';
import Wrapper from "../Wrapper";

import './style.css';

/**
* @author
* @function CountryList
**/

const CountryList = (props) => {
  const dispatch = useDispatch();
  
  //const filterByRegion = useSelector((state)=> state.filterByRegion);

  const countryList = useSelector((state)=> {
    console.log('State-->', state)
    //debugger;
    if(state.filterByRegion != '' && state.countryListByName.length === 0){
      return state.countriesByRegion; 
    }
    if(state.countryListByName.length > 0){
      return state.countryListByName; 
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

 

  

  return(
    <Wrapper>
      <div className="cl-block">
      {
        countryList.map(({name,region, capital, population,flag, cioc, alpha2Code})=>{
          return (
            <Country 
              key={name}
              flag={ flag }
              name={ name }
              population={ population }
              region={ region }
              capital={ capital }
              cioc={ cioc }
              alpha2Code={alpha2Code}
            />
          )
          
        })
      }
      
      </div>
    </Wrapper>
   )
  }


export default CountryList