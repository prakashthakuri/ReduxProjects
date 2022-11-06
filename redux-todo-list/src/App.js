import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Navbar from './components/Navbar';
import taskReducer from './reducers/taskReducers';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

function App() {
  const store = createStore(taskReducer)
  return (

    <div className="App">
      <Provider
      store = {store}
      >

      <Navbar />
      <AddTask />
      <TodoList />



      </Provider>
    </div>
  );
}

export default App;
