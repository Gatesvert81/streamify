import React from 'react'
// import Icon from '../StyledComponents/Icon'
// import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import HomePageTab from './HomePageTab'
// import user from '../Assets/user.svg'
import HomeWrapper from '../StyledComponents/HomeWrapper'
// import { Link } from 'react-router-dom'
import ProfilePopup from './ProfilePopup'

function HomeNav() {
    return (
        <HomeWrapper className="home-nav" >
            <Wrapper>
                Streamify
            </Wrapper>
            <Wrapper>
                <HomePageTab />
            </Wrapper>
            <Wrapper>
                <ProfilePopup />
            </Wrapper>
        </HomeWrapper>
    )
}

export default HomeNav
