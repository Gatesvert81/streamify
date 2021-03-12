import React from 'react'
import Card from '../StyledComponents/Card'
import PopupComp from '../StyledComponents/PopupComp'
import Wrapper from '../StyledComponents/Wrapper'
import user from '../Assets/user.svg'
import Icon from '../StyledComponents/Icon'
import Image from '../StyledComponents/Image'
import Button from '../StyledComponents/Button'
import { Link, useHistory } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'

function ProfilePopup() {
    const firebase = useFirebase()
    const history = useHistory()

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
                <Icon>
                    <Image src={user} alt="user" className="icon" />
                </Icon>
            }
            position="bottom center"
            closeOnDocumentClick
            arrow={false}
        >
            <Card className="profile-popup-card" >
                <Wrapper>
                    UserName
                </Wrapper>
                <Wrapper>
                    <Link to={`/streamify/profile`}>
                        <Button>
                            Setting
                        </Button>
                    </Link>
                </Wrapper>
                <Wrapper>
                    <Button>
                        Dark mode
                    </Button>
                </Wrapper>
                <Wrapper>
                    <Button className="profile-btn" onClick={() => handleLogOut()}>
                        Log Out
                    </Button>
                </Wrapper>
            </Card>
        </PopupComp>
    )
}

export default ProfilePopup
