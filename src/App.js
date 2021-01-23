import './App.css';
import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import ActionList from './components/ActionList';

const initialState = {
  countryList:[],
  countriesByRegion:[],
  countryListByName:[],
  filterByRegion:''
}



const store = createStore(
                reducer,
                initialState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                );

function App() {
  return (
    <div className="App">
      <i className="fas fa-moon" />
      <Provider store={ store }>
        <ActionList />
        <CountryList />
      </Provider>
    </div>
  );
}

export default App;
