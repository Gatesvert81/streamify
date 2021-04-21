import React, { useContext } from 'react'
import { BallClipRotate } from 'react-pure-loaders'
import { ThemeContext } from '../APIRequests/Context'
import Card from '../StyledComponents/Card'
import Wrapper from '../StyledComponents/Wrapper'

function Load() {
    const [theme] = useContext(ThemeContext)
    return (
        <Card className="loading">
            <Wrapper>
                <BallClipRotate color={theme ? "white" : "black" } loading />
            </Wrapper>
        </Card>
    )
}
 
export default Load
