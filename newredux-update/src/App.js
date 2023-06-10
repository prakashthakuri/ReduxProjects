import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

function App() {
  const user ='Prakash'

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser(user)) // dispatching to the store
  }, [dispatch]) // [dispatch] not actually required but react keeps throwing the warnings
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
