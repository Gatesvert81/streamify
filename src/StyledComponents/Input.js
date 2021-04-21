import styled from "styled-components";


const Input = styled.input`

    background: ${props => props.theme.secondary};
    border: none;
    border-bottom: 1px solid white;
    color: ${props => props.theme.textColor};

    &:focus{
        /* background: #f7f7fe40; */
        background: ${props => props.theme.secondary};
        color: ${props => props.theme.textColor}
    }

    &.search-input{
        position: -webkit-sticky ;
        position: sticky;
        top: 70px;
    }
`

export default Input