import './App.css';
import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import ActionList from './components/ActionList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CountryPage from './components/Country-page';

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
      <Provider store={ store }>
        <Router>
          <Header/>
          <Switch>
            <Route path={`/country/:name`} component={CountryPage} />
            <Route path={'/'} >
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
