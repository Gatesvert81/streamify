import styled from 'styled-components'

const Button = styled.button`
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    color: white;
    transition: 0.5s;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        opacity: 1;
    }

    &.primary{
        background: ${props => props.theme.color };
        color: black;
        border-color: ${props => props.theme.color };
        opacity: 0.8;
    }

    &.register{
        border-color: ${props => props.theme.textColor};
        color: ${props => props.theme.textColor};
    }

    &.moviepage-button{
        width: 100%;
    }

    &.primary:hover{
        transform: scale(1.05);
        opacity: 1;
    }

    &.primary-width{
        width: 100%;
    }

    &.primary-margin{
        margin-right: 10px;
    }

    &.secondary{
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
        display: flex;
        flex-direction: row;
        justify-content: flex-start ;
        align-items: center;
        border: none;
        background: none;
        color: ${props => props.theme.textColor };
        margin: 5px 0px;
        width: 130px;
        transition: 0.3s;
        text-decoration: none;
    }

    &.profile-btn:hover{
        background: ${props => props.theme.secondary };
        transform: scale(1.05);
    }
`

export default Button