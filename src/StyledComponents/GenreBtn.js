import styled from "styled-components";

const GenreBtn = styled.button`
    background: ${props => props.active ? props.theme.genreBtn : "none"} ;
    background: ${props => props.active ? props.theme.color : "none"} ;
    color: ${props => props.active ? props.theme.main : props.theme.textColor};
    /* color: ${props => props.theme.textColor }; */
    border: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 20px;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    margin: 0px 5px;
    padding: 8px;
    border-radius: 16px;
`

export default GenreBtn