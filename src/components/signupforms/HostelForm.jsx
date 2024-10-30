import React from 'react';
import styles from "../SignInStyling/signin.module.css";

export default function HostelForm() {
  return (
    <form action="">
        {/* <div className={styles.names}>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
        </div> */}
        <input type="text" placeholder="Hostel Name"/>
        <input type="text" placeholder="Hostel Address"/>
        <input type="text" placeholder="Phone Num"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Enter Password"/>
        <input type="password" placeholder="Confirm Password"/>

        <button style={{width: "70%"}}>Create account</button>

        <p>Or register with</p>

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
