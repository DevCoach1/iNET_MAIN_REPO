import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../Pages/landing.css'

import Navbar from '../Components/Navbar';


function RootLayout() {
  return (
    <div className="main_landing_page_container">
                <Navbar/>


                 <main>
                    <Outlet/>
                 </main>

    </div>
  )
}

export default RootLayout