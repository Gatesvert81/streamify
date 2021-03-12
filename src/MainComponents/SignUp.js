import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router'
import Button from '../StyledComponents/Button'
import Form from '../StyledComponents/Form'
import Input from '../StyledComponents/Input'
import Label from '../StyledComponents/Label'
import LandWrapper from '../StyledComponents/LandWrapper'
import Wrapper from '../StyledComponents/Wrapper'

function SignUp() {
    const firebase = useFirebase()
    const history = useHistory()

    const handleSignUp = (e) => {
        e.preventDefault()

        const { email, password, confirmPassword } = e.target.elements

        if ( password.value === confirmPassword.value ) {
            firebase
                .createUser({
                    email: email.value ,
                    password: password.value
                })
                .then(() => {
                    history.push("/streamify/home")
                })
            } else {
                alert("Please confirm Password")
            }
        

    }
    return (
        <LandWrapper className="signin-wrapper">
            <Form onSubmit={handleSignUp}>
                <Wrapper className="form-wrapper">
                    <Label>
                        Email
                    </Label>
                    <Input type="text" placeholder="Email" name="email" />
                </Wrapper>
                <Wrapper className="form-wrapper">
                    <Label>
                        Password
                </Label>
                    <Input type="password" placeholder="Password" name="password" />
                </Wrapper>
                <Wrapper className="form-wrapper">
                    <Label>
                        Confirm Password
                </Label>
                    <Input type="password" placeholder="Password" name="confirmPassword" />
                </Wrapper>
                <Button type="submit" className="register">
                    Sign Up
                </Button>
            </Form>
        </LandWrapper>
    )
}

export default SignUp
