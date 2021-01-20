import './App.css';
import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  countryList:[]
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
    default:{
      return state;
    }     
  }
  //return state
};

const store = createStore(
                reducer,
                initialState
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
