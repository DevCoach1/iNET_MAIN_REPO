import './landing.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Landing(){
    return(
        <main className="main_landing_page_container">
           

                 {/* ============================================================================================= */}

                 <div className="main_contact_container">
                    {/* <div className="social_media_and_contacts">
                        <div className="facebook_container social_container">
                            <a href='#' className='social_link'>
                                <FontAwesomeIcon icon={faFacebookF} className='social_icons' />
                            </a>
                        </div>
                        <div className="instagram_container social_container">
                            <a href='#' className='social_link'>
                                <FontAwesomeIcon icon={faInstagram} className='social_icons'/>
                            </a>
                        </div>
                        <div className="twitter_container social_container">
                            <a href='#' className='social_link'>
                                <FontAwesomeIcon icon={faXTwitter} className='social_icons'/>
                            </a>
                        </div>
                        <div className="linkedin_container social_container">
                            <a href='#' className='social_link'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='social_icons'/>
                            </a>
                        </div>
                    </div> */}
                    {/* <NavLink>
                        <div className="contact_details">
                            <div className="book_a_call">
                                Book a call
                            </div>
                            <div className="contact_arrow_icon">
                                <FontAwesomeIcon icon={faArrowRight} className='call_arrow_icon' />
                            </div>
                        </div>
                    </NavLink> */}
                </div>


                 {/* ============================================================================================== */}


                 <div className="main_hero_elements">
                    <div className="hero_texts h_text_default">
                        Your Next Home Awaits.
                    </div>
                    <div className="hero_subtext h_text_default">
                        Explore the Best Hostels with just a
                    </div>
                    <div className="click_container">
                        <div className="click_arrow_icon">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                        <NavLink to="click">
                            <div className="click_text">
                                Click
                            </div>
                        </NavLink>
                    </div>
                 </div>


                 {/* ============================================================================================== */}

                 <div className="main_compliment_card_container">
                    <div className="compliment_cards">
                        
                        <div className="single_card_container">
                            <div className="single_card firstCard">
                                <div className="card_number">
                                    50K+
                                </div>
                                <div className="card_num_sub">
                                    Satisfied Clients
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_card_container">
                            <div className="single_card secondCard">
                                <div className="card_number">
                                    10k+
                                </div>
                                <div className="card_num_sub">
                                    Hostels Available
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_card_container">
                            <div className="single_card thirdCard">
                                <div className="card_number">
                                    9K+
                                </div>
                                <div className="card_num_sub">
                                    Different Locations
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_card_container fourthCard">
                            <div className="single_card">
                                <div className="card_number">
                                    20+
                                </div>
                                <div className="card_num_sub">
                                    University Campus
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
        </main>
    )
}

export default Landing;