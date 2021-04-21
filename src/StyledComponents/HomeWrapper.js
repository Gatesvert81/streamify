import styled from "styled-components";
import Wrapper from "./Wrapper";

const HomeWrapper = styled(Wrapper)`

    &.home-nav{
        background: ${props => props.theme.nav};
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0vw;
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100vw;
        height: 50px;
        transition-timing-function: ease-in;
        transition: all 0.3s;
    }

    &.nav__black{
        background: ${props => props.theme.secondary}
    }

    &.homepage{
        padding: 65px 0;
    }
`

export default HomeWrapper 