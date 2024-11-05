import { 
  createBrowserRouter, 
  Route,
  NavLink, 
  createRoutesFromElements,
  RouterProvider} from "react-router-dom";

import Landing from "./Pages/Landing";
import './App.css'
import About from "./Pages/About";
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Landing/>} />
      <Route path="about" element={<About/>} />
    </Route>
  )
);


function App(){
  return (
    // <div>
    //   <Landing/>
    // </div>

    <RouterProvider router={router}/>
  )
}

export default App;