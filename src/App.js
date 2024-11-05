import { 
  BrowserRouter as Router,
  Route,
  NavLink, 
  Routes
} from "react-router-dom";

import Landing from "./Pages/Landing";
import './App.css'
import About from "./Pages/About";
import Signin from "./Components/Signin";
import Navbar from "./Components/Navbar";
import './Pages/landing.css'

function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route Component={Landing} path="/" exact/>
        <Route Component={About} path="/about" exact/>
        <Route Component={Signin} path="/signin" exact/>
      </Routes>
    </Router>
  )
}

export default App;