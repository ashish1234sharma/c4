import logo from './logo.svg';
import './App.css';
import {Routers} from "./Components/Routers/Routers"
import {Navbar} from "./Components/Navbar/Navbar"
 import {LoginSignUp} from "./Components/LoginSignUp/LoginSignUp"


function App() {
  return (
    <div className="App">
     <Routers />
     <Navbar />
     <LoginSignUp />
     <h3>ashish</h3>
    </div>
  );
}

export default App;
