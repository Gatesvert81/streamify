import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders'
import Button from '../StyledComponents/Button'
import Form from '../StyledComponents/Form'
import Input from '../StyledComponents/Input'
import Label from '../StyledComponents/Label'
import LandWrapper from '../StyledComponents/LandWrapper'
import Wrapper from '../StyledComponents/Wrapper'

toast.configure()
function SignUp() {
    const [loading, setLoading] = useState(false)
    const firebase = useFirebase()
    const history = useHistory()

    const handleSignUp = (e) => {
        setLoading(true)
        e.preventDefault()

        const { email, password, confirmPassword } = e.target.elements

        if (password.value === confirmPassword.value) {
            firebase
                .createUser({
                    email: email.value,
                    password: password.value
                })
                .then(() => {
                    setLoading(false)
                    toast.success("Sign Up Successful", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    history.push("/streamify/home")
                })
                .catch((err) => {
                    setLoading(false)
                    toast.error(err.message, {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
        } else {
            setLoading(false)
            toast.error("Please confirm Password", {
                position: toast.POSITION.TOP_CENTER
            });
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
                    {loading ? <BallBeat color={"white"} loading /> :
                        "Sign Up "}
                </Button>
            </Form>
        </LandWrapper>
    )
}

export default SignUp
