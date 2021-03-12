import React from 'react'
import Button from '../StyledComponents/Button'
import HeadText from '../StyledComponents/HeadText'
import Image from '../StyledComponents/Image'
import Text from '../StyledComponents/Text'
import Wrapper from '../StyledComponents/Wrapper'
import spider from '../Assets/spider.jpg'
import Card from '../StyledComponents/Card'

function ProfilePage() {
    return (
        <Wrapper>
            <Wrapper>
                <Card className="profile-pic-card">
                <Image src={spider} alt="profile-pic" className="profile-pic" />
                </Card>
            </Wrapper>
            <Wrapper>
                <HeadText>
                    UserName
                </HeadText>
                <Text>Email</Text>
                <Text>Subscription</Text>
                <Button>Change Password</Button>
            </Wrapper>
            <Wrapper>
                Subscription Card
            </Wrapper>
        </Wrapper>
    )
}

export default ProfilePage


