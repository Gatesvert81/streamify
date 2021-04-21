import React, { useContext } from 'react'
import Card from '../StyledComponents/Card'
import PopupComp from '../StyledComponents/PopupComp'
import Wrapper from '../StyledComponents/Wrapper'
import user from '../Assets/user.svg'
import logout from '../Assets/logout.png'
import moon from '../Assets/moon.png'
import setting from '../Assets/settings.png'
import sun from '../Assets/sunny-day.png'
import Icon from '../StyledComponents/Icon'
import Image from '../StyledComponents/Image'
import Button from '../StyledComponents/Button'
import { Link, useHistory } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'
import { ThemeContext } from '../APIRequests/Context'

function ProfilePopup() {
    const firebase = useFirebase()
    const history = useHistory()
    const [theme, setTheme] = useContext(ThemeContext)

    const handleLogOut = () => {
        firebase
            .logout()
            .then(() => {
                history.push("/")
            })
    }
    return (
        <PopupComp
            trigger={
                <Icon className="nav-icon">
                    <Image src={user} alt="user" className="icon" />
                </Icon>
            }
            position="left top"
            closeOnDocumentClick
            arrow={false}
        >
            <Card className="profile-popup-card" >
                <Wrapper className="profile-popup-card-user">
                    UserName
                </Wrapper>
                <Wrapper>
                    <Link to={`/streamify/profile`}>
                        <Button className="profile-btn" >
                        <Wrapper>
                            <Image src={setting} alt="user" className="profile-popup-icon" />
                        </Wrapper>
                        <Wrapper>
                            Setting
                        </Wrapper>
                        </Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <Button className="profile-btn" onClick={() => setTheme(!theme)}>
                        <Wrapper>
                            <Image src={theme ? sun : moon} alt="user" className="profile-popup-icon" />
                        </Wrapper>
                        <Wrapper>
                            {theme ? "Light Mode" : "Dark Mode"}
                        </Wrapper>
                    </Button>
                </Wrapper>
                <Wrapper>
                    <Button className="profile-btn" onClick={() => handleLogOut()}>
                    <Wrapper>
                            <Image src={logout} alt="user" className="profile-popup-icon" />
                        </Wrapper>
                        <Wrapper>
                            Log Out
                        </Wrapper>
                    </Button>
                </Wrapper>
            </Card>
        </PopupComp>
    )
}

export default ProfilePopup
