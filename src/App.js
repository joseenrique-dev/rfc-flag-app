import './App.css';
import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  countryList:[],
  countriesByRegion:[],
  countryListByName:[],
  filterByRegion:''
}

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
      const countryListByName = state.countryList.filter((country)=>{
        
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

const store = createStore(
                reducer,
                initialState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                );

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <CountryList />
      </Provider>
    </div>
  );
}

export default App;
