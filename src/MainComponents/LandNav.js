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
            <Wrapper>
                <RegistrationPage name="Sign Up" classname="primary"/>
                <RegistrationPage name="Sign In" />
            </Wrapper>
        </LandWrapper>
    )
}

export default LandNav
