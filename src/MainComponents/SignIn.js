import React from 'react'
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Button from '../StyledComponents/Button'
import Form from '../StyledComponents/Form'
import Input from '../StyledComponents/Input'
import Label from '../StyledComponents/Label'
import LandWrapper from '../StyledComponents/LandWrapper'
import Wrapper from '../StyledComponents/Wrapper'

function SignIn() {
    const firebase = useFirebase()
    const history = useHistory()

    const handleSignIn = (e) => {
        e.preventDefault()

        const { email, password } = e.target.elements

        firebase
            .login({
                email: email.value ,
                password: password.value
            })
            .then(() => {
                history.push("/streamify/home")
            })

    }

    return (
        <LandWrapper className="signin-wrapper">
            <Form onSubmit={handleSignIn}>
                <Wrapper className="form-wrapper">
                    <Label>
                        Email
                    </Label>
                    <Input type="text" placeholder="Email" name="email" />
                </Wrapper>
                <Wrapper className="form-wrapper" >
                    <Label>
                        Email
                </Label>
                    <Input type="password" placeholder="Password" name="password" />
                </Wrapper>
                <Button type="submit" className="register">
                    Sign In
                </Button>
            </Form>
        </LandWrapper>
    )
}

export default SignIn
