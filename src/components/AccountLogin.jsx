import React from 'react';
import styles from "./SignInStyling/signin.module.css";

export default function AccountLogin({showIntroPage}) {
  return (
    <form action="" style={{gap: "20px"}}>
        <h1>Welcome Back</h1>

        <p>Don't have an account? <a href="https://" onClick={(e)=>{
            e.preventDefault();
            showIntroPage();
           }}>Create account</a>
           
        </p>

        <input type="text" placeholder="Username/Email"/>
        <input type="password" placeholder="Enter Password"/>

        <button style={{width: "70%"}}>Log in</button>

        <p>Or sign in with</p>

        <div className={styles.social_signup}>
            <a href="https://">
                <img src="./images/google.png" alt=""/>
            </a>
            <a href="https://">
                <img src="./images/apple.png" alt=""/>
            </a>
        </div>
    </form>
  )
}
