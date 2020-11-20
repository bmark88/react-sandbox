import './App.css';

// Components
// import ToDo from './components/to-do.component';
import Register from './components/Authentication/register.component';
import SignIn from './components/Authentication/sign-in.component';

function App() {
  return (
    <>
      {/* <ToDo /> */}
      <Register />
      <SignIn />
    </>
  );
}

export default App;
