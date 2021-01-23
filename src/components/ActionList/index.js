import React from 'react'
import {Region as FilterRegion} from '../Region'
import Search from '../Search'
import Wrapper from '../Wrapper';
import './style.css';

/**
* @author
* @function ActionList
**/

const ActionList = (props) => {
  return(
      <Wrapper >
            <div className='action-list-box'>
                <Search />
                <span></span>
                <FilterRegion />
            </div>
        </Wrapper>        
   )

 }

export default ActionList