import styled from "styled-components";

const Image = styled.img`

    &.icon{
        width: 100%;
        height: 100%;
        filter: ${props => props.theme.filter};
        transition: 0.2s;
    }

    &.icon:hover{
        transform: scale(1.02);
        filter: invert(50%);
    }

    &.select{
        width: 24px;
        height: 24px;
        filter: ${props => props.theme.filter};
    }

    &.profile-popup-icon{
        width: 20px;
        height: 20px;
        margin-right: 6px;
        filter: ${props => props.theme.filter};
    }

    &.my-stuff-img{
        width: 30px;
        height: 30px;
        filter: invert(100%);
    }

    &.dot-img{
        width: 6px;
        height: 6px;
        filter: invert(100%);
    }

    &.movie-image{
        width: 100%;
        transition: 0.5s;
    }

    &.profile-pic{
        width: 100%;
        height: 100%;
    }

    &.primary{
        width: 30px;
        height: 30px;
        filter: invert(100%);
    }

    &.detail-img{
        width: 18px;
        height: 18px;
        margin-right: 6px;
        filter: invert(100%);
    }

    &.movie-page-nav-icon{
        width: 25px;
        height: 25px;
        filter: invert(100%);
        margin: 0px 5vw 0px;
    }
`
export default Image