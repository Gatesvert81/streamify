import React from 'react'
import Card from '../StyledComponents/Card'
import Icon from '../StyledComponents/Icon'
import home from '../Assets/home.svg'
import search from '../Assets/search.svg'
import add from '../Assets/add.svg'
import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import { Link } from 'react-router-dom'

function HomePageTab() {

    return (
        <Card className="home-tap">
            <Wrapper>
                <Link to={`/streamify/home`}>
                    <Icon>
                        <Image src={home} alt="home" className="icon" />
                    </Icon>
                </Link>
            </Wrapper>
            <Wrapper className="search" >
                <Link  to={`/streamify/search`} >
                    <Icon>
                        <Image src={search} alt="home" className="icon" />
                    </Icon>
                </Link>
            </Wrapper>
            <Wrapper>
                <Link to={`/streamify/mystuff`}>
                    <Icon>
                        <Image src={add} alt="home" className="icon" />
                    </Icon>
                </Link>
            </Wrapper>
        </Card>
    )
}

export default HomePageTab
