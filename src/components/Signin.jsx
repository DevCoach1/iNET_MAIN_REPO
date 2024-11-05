import React, { useRef, useState, useEffect } from 'react';
import styles from "./SignInStyling/signin.module.css"
import Intro from './Intro';
import AccountCreation from './AccountCreation';
import AccountLogin from './AccountLogin';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Signin() {
  const [showIntro, setShowIntro] = useState(false);

  const [showSignup, setShowSignup] = useState(false);

  const [showSignin, setShowSignin] = useState(true);

  const [isHostel, setIsHostel] = useState(false);

  const sliderRef = useRef();

  const navigate = useNavigate();

  const onBackButtonEvent = (e) =>{
    if(showSignin){
      navigate("/");
    }else{
      navigate("/signin");
      if(showSignup){
        displayIntroPage()
      }else{
        displaySigninPage()
      }
    }
  }

  useEffect(() => {
    navigate("/signin");
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);  
    };
  }, [showIntro]); // eslint-disable-line react-hooks/exhaustive-deps

  const displayIntroPage = () =>{
    sliderRef.current.style.right = `100%`;
    setShowSignup(false);
    setShowSignin(false);
    setShowIntro(true);
  }

  const displaySignupPage = () =>{
    sliderRef.current.style.right = `200%`;
    setShowIntro(false);
    setShowSignin(false);
    setShowSignup(true);
  }

  const displaySigninPage = () =>{
    sliderRef.current.style.right = `0`;
    setShowIntro(false);
    setShowSignin(true);
    setShowSignup(false);
  }

  return (
    <main>
      <div className={styles.left_side}>
            <div className={styles.image_slide}>
                <div className={styles.slider} ref={sliderRef}>
                    <img src="./images/3.jpg" alt=""/>
                    <img src="./images/1.jpg" alt=""/>
                    <img src="./images/2.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.overlay}>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla deserunt rem eius nemo aut, harum iste temporibus explicabo laboriosam, 
                    eos voluptatum excepturi labore dolorem minima vero fugit delectus deleniti enim.
                </h4>
                <p>Gerald Caroline- Fresh Graduate of Adamo University</p>

                <div className={styles.login_steps_container}>
                <div className={`${styles.step} ${showSignin && styles.active}`}></div>
                    <div className={`${styles.step} ${showIntro && styles.active}`}></div>
                    <div className={`${styles.step} ${showSignup && styles.active}`}></div>
                </div>
            </div>
      </div>
      <div className={styles.right_side}>
        {
          showIntro && (
            <Intro showSignupPage={displaySignupPage} setIsHostel={setIsHostel}/>
          )
        }
        {
          showSignup && (
            <AccountCreation showSigninPage={displaySigninPage} isHostel={isHostel}/>
          )
        }
        {
          showSignin && (
            <AccountLogin showIntroPage={displayIntroPage}/>
          )
        }
      </div>
    </main>
  )
}
