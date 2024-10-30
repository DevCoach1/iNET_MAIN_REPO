import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";

function App(){
  return (
    <Router>
      <Routes>
        <Route Component={Signin} path="/signin" exact/>
      </Routes>
    </Router>
  )
}

export default App;