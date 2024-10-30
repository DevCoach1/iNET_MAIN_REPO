import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
             <div>
     <          header>
                    <nav>
                        <div className='nav_bar_element'>
                            <div className="logo_name_container">
                                <div className='nav_bar_logo_left'>
                                    <img src={logo} alt='logo' className='logo_image'/>
                                </div>
                                <div className="logo_name">
                                    HOSTELHUNT
                                </div>
                            </div>
                            <div className='nav_bar_options_mid navOption'>
                                <NavLink to='/'>
                                    <div className="home_nav navOption">
                                        <FontAwesomeIcon icon={faHouse} className='nav_bar_icons home_icon'/>
                                        <div className="homeItself nav_name">
                                            Home
                                        </div>
                                    </div>
                                </NavLink>

                                <NavLink to='about'>
                                    <div className="about_nav navOption">
                                        <FontAwesomeIcon icon={faAddressCard} className='nav_bar_icons' />
                                        <div className="aboutItself nav_name">
                                            About
                                        </div>
                                    </div>
                                </NavLink>

                                <NavLink to='explore'>
                                    <div className="explore_nav navOption">
                                        <FontAwesomeIcon icon={faGlobe} className='nav_bar_icons'/>
                                        <div className="exploreItself nav_name">
                                            Explore
                                        </div>
                                    </div>
                                </NavLink>

                                <NavLink to=''>
                                    <div className="policies_nav navOption">
                                        <FontAwesomeIcon icon={faGear} className='nav_bar_icons'/>
                                        <div className="policiesItself nav_name">
                                            Policies
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <NavLink to="GetStarted">
                                <div className='nav_bar_option_right'>
                                    <div className="getStartedIself">
                                        Get Started
                                    </div>
                                    <div className="get_started_arrow_icon">
                                        <FontAwesomeIcon icon={faArrowRight} className='get_start_icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </nav>
                 </header>   
            </div>
  )
}

export default Navbar