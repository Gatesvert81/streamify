import styled from "styled-components";
import Wrapper from "./Wrapper";

const HomeWrapper = styled(Wrapper)`

    &.home-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2vh 5vw;
    }
`

export default HomeWrapper