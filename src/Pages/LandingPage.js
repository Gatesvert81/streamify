import React from 'react'
import LandFooter from '../MainComponents/LandFooter'
import LandNav from '../MainComponents/LandNav'
import LandWrapper from '../StyledComponents/LandWrapper'
// import Wrapper from '../StyledComponents/Wrapper'

function LandingPage() {
    return (
        <LandWrapper className="landing-page">
            <LandNav />
            <LandFooter />
        </LandWrapper> 
    )
}

export default LandingPage
