import React, { useEffect, useState } from 'react'
// import Icon from '../StyledComponents/Icon'
// import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import HomePageTab from './HomePageTab'
// import user from '../Assets/user.svg'
import HomeWrapper from '../StyledComponents/HomeWrapper'
// import { Link } from 'react-router-dom'
import ProfilePopup from './ProfilePopup'

function HomeNav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc )
        return () => {
            window.removeEventListener("scroll", myFunc )
        }
    }, [])

    return (
        <HomeWrapper className={ `home-nav ${show && "nav__black"}` } >
            <Wrapper className="logo">
                Streamify
            </Wrapper>
            <Wrapper>
                <HomePageTab /> 
            </Wrapper>
            <Wrapper className="home-nav-popup" >
                <ProfilePopup />
            </Wrapper>
        </HomeWrapper>
    )
}

export default HomeNav
