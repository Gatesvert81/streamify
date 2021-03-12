import styled from 'styled-components'

const Button = styled.button`
    background: none;
    border: 1px solid white;
    padding: 5px;
    color: white;

    &.primary{
        background: white;
        color: black;
    }

    &.register{
        margin-top: 50px;
    }

    &.btnTab{
        background: none;
        border: 1px hidden white;
        border-bottom: 1px solid white;
        padding: 5px;
        color: white;
    }

    &.profile-btn{
        color: black;
    }
`

export default Button