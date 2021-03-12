import React, { useState } from 'react'
import SignIn from '../MainComponents/SignIn'
import SignUp from '../MainComponents/SignUp'
import Button from '../StyledComponents/Button'
import PopupComp from '../StyledComponents/PopupComp'
import Wrapper from '../StyledComponents/Wrapper'

function RegistrationPage({name, classname}) {
    const [tabDisplay, setTabDisplay] = useState(true)
    return (
        <PopupComp
        trigger={<Button className={classname}>{name}</Button>}
        modal
        nested
        closeOnDocumentClick
        className="registration-popup" 
        >
        <Wrapper>
            <Wrapper className="registration-page-buttons">
                <Button onClick={() => setTabDisplay(true)} className="btnTab">
                    Sign In
                </Button>
                <Button  onClick={() => setTabDisplay(false)} className="btnTab" >
                    Sign Up
                </Button>
            </Wrapper>
            {tabDisplay ? <SignIn/> : <SignUp />}
            {/* <SignIn /> */}
        </Wrapper>
        </PopupComp>
    )
}

export default RegistrationPage
