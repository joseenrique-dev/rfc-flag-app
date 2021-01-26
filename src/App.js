import CountryList from "./components/Country-list";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import ActionList from './components/ActionList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CountryPage from './components/Country-page';
import './App.css';
import { useEffect, useState } from 'react';

const initialState = {
  countryList:[],
  countriesByRegion:[],
  countryListByName:[],
  filterByRegion:''
}
///1-10-31
const store = createStore(
                reducer,
                initialState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                );

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, []);

  return (
    <main className={mainClass} darkMode={darkMode}>
      <Provider store={ store }>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Switch>
            <Route path={`/country/:name`} component={CountryPage} />
            <Route path={'/'} >
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
