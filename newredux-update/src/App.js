import './App.css';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { NewComponent } from './NewComponent';

function App() {
  const user ='Prakash'

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser(user)) // dispatching to the store
  }, [dispatch]) // [dispatch] not actually required but react keeps throwing the warnings
  return (
    <div className="App">

    React Parent 

    <NewComponent />
         </div>
  );
}

export default App;
