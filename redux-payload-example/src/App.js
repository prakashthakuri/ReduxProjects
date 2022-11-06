import './App.css';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import LanguageComponent from './components/LanguageComponent';
import LanguageAuthor from './components/LanguageAuthor';
import LanguageReducers from './reducers/languageReducers';

function App() {

  const store = createStore(LanguageReducers)
  return (
    <div className="App">
      Redux Payload

      <Provider
      store={store}
      >

<LanguageComponent />

<LanguageAuthor />

      </Provider>

   

    </div>
  );
}

export default App;
