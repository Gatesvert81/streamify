import styled from "styled-components";
import Wrapper from "./Wrapper";
import bg from '../Assets/bg.jpg'

const LandWrapper = styled(Wrapper)`
    &.landing-page{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        background: url(${bg}) no-repeat;
        background-size: cover;
        background-position: center;
    }

    &.signin-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        width: 40vw;
        height: 50vh;
        /* backdrop-filter: blur(4px); */
    }
   


    &.landNav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 3vh 5vw;
        color: ${props => props.theme.primaryColor}
    }

    &.land-footer{
        display: flex;
        justify-content: space-between;
        padding: 3vh 5vw 3vh;
        backdrop-filter: blur(5px);
        color: ${props => props.theme.primaryColor}
    }
`

export default LandWrapper