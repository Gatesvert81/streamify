import React, { useState } from 'react'
import SignIn from '../MainComponents/SignIn'
import SignUp from '../MainComponents/SignUp'
import Button from '../StyledComponents/Button'
import Line from '../StyledComponents/Line'
import PopupComp from '../StyledComponents/PopupComp'
import Wrapper from '../StyledComponents/Wrapper'

function RegistrationPage({ name, classname, sign }) {
    const [tabDisplay, setTabDisplay] = useState(sign)
    return (
        <PopupComp
            trigger={<Button className={classname}>{name}</Button>}
            modal
            nested
            closeOnDocumentClick
            className="registration-popup"
        >
            <Wrapper className="registration-page">
                <Wrapper className="registration-nav">
                    <Wrapper className="registration-page-buttons">
                        <Wrapper 
                        onClick={() => setTabDisplay("Sign In")} className="sign-btn-wrapper sign-in-select" 
                        select={tabDisplay === "Sign In" ? "block" : "none" }
                        >
                            Sign In
                        </Wrapper>
                        <Wrapper 
                            onClick={() => setTabDisplay("Sign Up")} 
                            className="sign-btn-wrapper sign-up-select" 
                            select={tabDisplay === "Sign Up" ? "block" : "none" }
                            >
                            Sign Up
                        </Wrapper>
                    </Wrapper>
                    {/* <Wrapper classNmae="line-wrapper">
                        <Line />
                    </Wrapper> */}
                </Wrapper>
                <Wrapper>
                    {tabDisplay === "Sign In" ? <SignIn /> : <SignUp />}
                </Wrapper>
            </Wrapper>
        </PopupComp>
    )
}

export default RegistrationPage
