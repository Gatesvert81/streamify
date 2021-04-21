import React from 'react'
import Text from '../StyledComponents/Text'
import Wrapper from '../StyledComponents/Wrapper'
import Card from '../StyledComponents/Card'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

function ProfilePage() {

        
    const firestore = useFirestore()
    const { uid } = useSelector(state => state.firebase.auth)
    const { email } = useSelector(state => state.firebase.auth)
    return (
        <Wrapper className="profile-page">
            <Wrapper>
                <Card className="profile-pic-card">
                {email[0]}
                </Card>
            </Wrapper>
            <Wrapper>
                <Text>{email}</Text>
                <Text>Freemium</Text>
            </Wrapper>
        </Wrapper>
    )
}

export default ProfilePage


