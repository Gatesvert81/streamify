import React, { useState } from 'react'
import Card from '../StyledComponents/Card'
import Icon from '../StyledComponents/Icon'
import home from '../Assets/home.svg'
import homebold from '../Assets/home.png'
import search from '../Assets/search.svg'
import glass from '../Assets/glass.png'
import add from '../Assets/add.svg'
import plus from '../Assets/plus.png'
import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import { Link } from 'react-router-dom'

function HomePageTab() {
    const [selected, setSelected] = useState("Home")

    const handleSelect = (select) => {
        setSelected(select)
    }

    return (
        <Card className="home-tap">
            <Wrapper>
                <Link to={`/streamify/home`}>
                    <Icon onClick={() => handleSelect("Home")} className="nav-icon">
                        <Image 
                        src={selected === "Home" ? homebold : home } alt="home" 
                        className={selected === "Home" ? "select" : "icon"} />
                    </Icon>
                </Link>
            </Wrapper>
            <Wrapper className="search" >
                <Link  to={`/streamify/search`} >
                    <Icon onClick={() => handleSelect("Search")} className="nav-icon">
                        <Image 
                        src={selected === "Search" ? glass : search } alt="saerch" 
                        className={selected === "Search" ? "select" : "icon"} />
                    </Icon>
                </Link>
            </Wrapper>
            <Wrapper>
                <Link to={`/streamify/mystuff`}>
                    <Icon onClick={() => handleSelect("MyStuff")} className="nav-icon">
                        <Image 
                        src={selected === "MyStuff" ? plus : add } alt="mystuff" 
                        className={selected === "MyStuff" ? "select" : "icon"} />
                    </Icon>
                </Link>
            </Wrapper>
        </Card>
    )
}

export default HomePageTab
