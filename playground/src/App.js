import { Route, Switch } from 'react-router';

import './App.css';

// Components
import ToDo from './components/to-do.component';
import Register from './components/Authentication/register.component';
import SignIn from './components/Authentication/sign-in.component';
import Docker from './pages/docker';
import Welcome from './pages/Welcome';

function App() {
  const user = window.localStorage.getItem('loggedInAs');

  const clearUserStorage = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  
  const miniProjectList = ['docker', 'login', 'register', 'to-do-list'];

  return (
    <>
      <Switch>
        <Route exact path='/react-sandbox' render={() => (
          <Welcome projects={miniProjectList} />
        )}/>
        <Route path='/docker' render={() => <Docker />}/>
        <Route path='/to-do-list' render={() => <ToDo />} />
        <Route path='/login' render={() => <SignIn />}/>
        <Route path='/register' render={() => <Register />}/>
      {
        user && 
        <>
          Logged in as: {user}
          <button onClick={clearUserStorage}>Logout</button>
        </>
      }
      {
        !user &&
        <>
          <Register />
          <SignIn />
        </>
      }
        </Switch>
    </>
  );
}

export default App;
