import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import InputSearch from '../InputSearch'

import './style.css';

/**
* @author
* @function Search
**/

const Search = (props) => {
    const dispatch = useDispatch();
    const [ inputNameFilter, setInputNameFilter ] = useState('');

    const filterByName = ( event ) =>{
        console.log('Name:', event.target.value);
        const countryName = event.target.value;
        setInputNameFilter(countryName);
    
        dispatch({
          type:'SEARCH_COUNTRIES_BY_NAME',
          payload: countryName
        })
      }
    
      const onClearNameFilter = () =>{
        setInputNameFilter('');
        dispatch({
          type: 'SEARCH_COUNTRIES_BY_NAME',
          payload: ''
        });
      }

  return(
    <div className="searchByName-block">
        <InputSearch type="text" placeholder="Search by name here !" value={ inputNameFilter } onChange={filterByName} />
        {
          inputNameFilter ?
          <button onClick={onClearNameFilter}>Clear Filter</button> :
          null
        }

      </div>
   )

 }

export default Search