import React from 'react';
import styles from "./SignInStyling/signin.module.css";

export default function Intro({showSignupPage, setIsHostel}) {
  return (
    <>
        <h1>Introduce yourself</h1>

        <p>
            We'd love to learn more about you. Count you share a few sentences
            about your background and where you're from?
        </p>
        <div className={styles.hostel_or_student}>
            <label htmlFor="stud" className={styles.option}>
                <div className={styles.message}>
                    <img src="./images/student.png" alt="Student Logo"/>
                    <h4>I am a student</h4>
                    <p>Look for a hostel to rent</p>
                </div>
                <input type="radio" defaultChecked name='status' id="stud" onChange={(e)=>{
                    setIsHostel(false)
                }}/>
            </label>
            <label htmlFor="hostel" className={styles.option}>
                <div className={styles.message}>
                    <img src="./images/hostel.png" alt="Hostel Logo"/>
                    <h4>I am a hostel</h4>
                    <p>Post Hostel rooms and manage them</p>
                </div>
                <input type="radio" id="hostel" name='status' onChange={(e)=>{
                    setIsHostel(true)
                }}/>
            </label>
        </div>

        <button style={{marginTop: "50px"}} 
            onClick={(e)=>{
            showSignupPage();
        }}>Get Started</button>

        <p>You're ready to rock 🔥</p>
    </>
  )
}
