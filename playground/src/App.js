import { Route, Switch } from 'react-router';

import './App.css';

// Components
import ToDo from './components/to-do.component';
import Register from './components/Authentication/register.component';
import SignIn from './components/Authentication/sign-in.component';
import Docker from './pages/docker';

function App() {
  // const user = window.localStorage.getItem('loggedInAs');

  // const clearUserStorage = (e) => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   window.location.reload();
  // };

  return (
    <>
      <Switch>
        <Route path='/docker' render={() => <Docker />}/>
        <Route exact path='/' render={() => <h1>Welcome To Bradley's React Sandbox</h1>} />
        {/* <Route path='/to-do-list' render={() => <ToDo />} /> */}
        <Route path='/login' render={() => <SignIn />}/>
        <Route path='/register' render={() => <Register />}/>
      {/* {
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
      } */}
        </Switch>
    </>
  );
}

export default App;
