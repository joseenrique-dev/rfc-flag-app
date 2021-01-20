import './App.css';
import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  countryList:[]
}

const reducer = (state, action) =>state;

const store = createStore(reducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
