import './App.css';

// Components
// import ToDo from './components/to-do.component';
import Register from './components/Authentication/register.component';
import SignIn from './components/Authentication/sign-in.component';
// import Docker from './pages/docker';

function App() {
  const user = window.localStorage.getItem('loggedInAs');

  const clearUserStorage = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* <ToDo /> */}
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
      {/* <Docker /> */}
    </>
  );
}

export default App;
