import React from 'react';
import StudentForm from './signupforms/StudentForm';
import HostelForm from './signupforms/HostelForm';

export default function AccountCreation({showSigninPage, isHostel}) {
    return (
        <>
            <h1>Create an account</h1>

            <p>Already have an account? <a href="https://" onClick={(e)=>{
                    e.preventDefault();
                    showSigninPage();
                }}>Log in</a>
            </p>

            {
                !isHostel ? <StudentForm/> :
                <HostelForm/>
            }
        </>
    )
}
