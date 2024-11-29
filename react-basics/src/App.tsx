import './App.css';
import {Dashboard} from "./component/Dashboard.tsx";
import {Login} from "./component/Login.tsx";



function App() {

  const  isLoggedIn = true;

  let content;

  if (isLoggedIn) {
      content = <Dashboard/>
  } else {
      content = <Login/>
  }

  return (
      <>
          {content}
      </>
  );
}

export default App;
