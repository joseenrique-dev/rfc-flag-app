//Nos quedamos en el 2-41-54
const reducer = (state, action) =>{
    switch (action.type) {
      case 'SET_COUNTRY_LIST':{
        console.log('state--->', action)
  
        return {
          ...state,
          countryList: action.payload
        }
      }
      case 'GET_COUNTRIES_BY_REGION':{
        
        const countriesByRegion = state.countryList.filter((country) =>{
          return country.region === action.payload;
        })
        return {
          ...state,
          countriesByRegion,
          filterByRegion: action.payload
        }
      }
  
      case 'SEARCH_COUNTRIES_BY_NAME':{
        let list;
        if ( state.filterByRegion != '' ){
          list = state.countriesByRegion
        }else{
          list = state.countryList;          
        }
        const countryListByName = list.filter((country)=>{
          
        return country.name.toLowerCase().includes(action.payload.toLowerCase());
        })
        console.log('SEARCH_COUNTRIES_BY_NAME-->', countryListByName);
  
        return{
          ...state,
          countryListByName
        }
      
      }
      default:{
        return state;
      }     
    }
    //return state
  };

  export default reducer;