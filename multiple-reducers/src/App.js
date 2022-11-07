import './App.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReduxMultipleReducers from './ReduxMultipleReducers';
import rootReducer from './reducers/rootReducers';
function App() {

  const store = createStore(rootReducer)
  return (
    <div className="App">
      <h1>Combine Reducers - Multiple Reducers</h1>
      <Provider
      store= {store}>

      <ReduxMultipleReducers />
      </Provider>
     
    </div>
  );
}

export default App;
