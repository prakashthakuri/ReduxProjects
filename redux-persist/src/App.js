import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import rootReducer from './reducers/rootReducers';

function App() {
  // const store = createStore(taskReducer)
  const persistConfig = {
    key: 'root', //key name for local storage
    storage // storing a data in local storage
  }

  const PersistReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(PersistReducer)
  const persistor = persistStore(store)


  return (

    <div className="App">
      <Provider
      store = {store}
      >
        <PersistGate
        persistor={persistor}
        >

            {/* <Navbar /> */}
          <AddTask />
          <TodoList />

        </PersistGate>

      



      </Provider>
    </div>
  );
}

export default App;
