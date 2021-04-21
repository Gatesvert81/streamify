import React from 'react'
import Wrapper from '../StyledComponents/Wrapper'
import LandWrapper from '../StyledComponents/LandWrapper'
import RegistrationPage from '../Pages/RegistrationPage'

function LandNav() {


    return (
        <LandWrapper className="landNav"> 
            <Wrapper>
                Streamify
            </Wrapper>
            <Wrapper className="land-nav-btn">
                <RegistrationPage name="Sign Up" classname="primary primary-margin" sign="Sign Up"/>
                <RegistrationPage name="Sign In" sign="Sign In"/>
            </Wrapper>
        </LandWrapper>
    )
}

export default LandNav
