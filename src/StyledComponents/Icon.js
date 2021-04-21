import styled from "styled-components";

const Icon = styled.button`

    width: 30px;
    height: 30px;
    border: 1px hidden ;
    border-radius: 5px;
    background:  ${props => props.theme.secondary};

    &.nav-icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.primary{
        width: fit-content;
        background: none;
        border: none;
        margin-left: 10px;
    }
    
    &.my-stuff-btn{
        width: fit-content;
        height: fit-content;
        background: none;
        margin-right: 10px;
    }

    &.dot{
        width: fit-content;
        height: fit-content;
        background: none;
    }
`
export default Icon