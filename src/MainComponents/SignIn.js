import React, { useState } from 'react'
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { BallBeat } from 'react-pure-loaders'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../StyledComponents/Button'
import Form from '../StyledComponents/Form'
import Input from '../StyledComponents/Input'
import Label from '../StyledComponents/Label'
import LandWrapper from '../StyledComponents/LandWrapper'
import Wrapper from '../StyledComponents/Wrapper'

toast.configure()
function SignIn() {
    const [loading, setLoading] = useState(false)
    const firebase = useFirebase()
    const history = useHistory()

    const handleSignIn = (e) => {
        setLoading(true)
        e.preventDefault()

        const { email, password } = e.target.elements

        firebase
            .login({
                email: email.value ,
                password: password.value
            })
            .then(() => {
                setLoading(false)
                toast.success("Sign In Successful", {
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
                        Password
                </Label>
                    <Input type="password" placeholder="Password" name="password" />
                </Wrapper>
                <Button type="submit" className="register">
                    { loading ? <BallBeat color={"white"} loading />  : 
                    "Sign In "}
                </Button>
            </Form>
        </LandWrapper>
    )
}

export default SignIn
