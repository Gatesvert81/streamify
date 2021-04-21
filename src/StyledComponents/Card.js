import styled from 'styled-components'

const Card = styled.div`

    &.land__footer__card{
        text-align: center;
        padding: 3vh 5vw 3vh;
        backdrop-filter: blur(3px);
        transform: scale(0.9);
        color: ${props => props.theme.textColor};
        transition: 0.3s ease-in-out ;
        opacity: 0.9;
    }

    &.land__footer__card:hover{
        transform: scale(1);
        box-shadow: 5px 5px 5px black, -5px -5px 5px black;
        opacity: 1;
    }

    &.home-tap{
        display: flex;
        flex-direction: row;
        background: ${props => props.theme.primary};
        padding: 8px;
        border: hidden;
        border-radius: 5px;
    } 

    &.loading{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 45vh;
        bottom: 45vh; 
        right: 45vw;
        left: 45vw;
    }

    &.genre-fixed{
        display: flex;
        flex-direction: row;
        position: -webkit-sticky ;
        position: sticky;
        top: 60px;
        z-index: 10;
        background: ${props => `linear-gradient(180deg, ${props.theme.secondary} 5% , transparent 100% )` };
    }

    &.genre-tab{
        display: flex;
        overflow-x: scroll;
        
    }

    &.genre-tab::-webkit-scrollbar{
        display: none;
    }

    &.movie-card{
        position: relative;
        border: 1px solid black;
        margin: 10px;
        width: 300px;
        height: fit-content;
        overflow: hidden;
    }

    &.movie-card:hover > .movie-image {
        transform: scale(1.2);
    }

    &.movie-card::before{
        background: blue;
    }

    &.movie-page-card{
        align-self: flex-end;
        padding: 10px;
    }

    &.profile-pic-card{
        display: flex;
        justify-content: center;
        align-content: center;
        border: 1px solid black;
        padding: 40px;
        border-radius: 50%;
        overflow: hidden;
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    &.profile-popup-card{
        background: ${props => props.theme.primary};
        color: ${props => props.theme.textColor};
        border: 1px hidden;
        border-radius: 5px;
        padding: 10px;
        /* width: 100px; */
    }

    @media all and (min-width: 400px) {
        &.genre-fixed{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        &.genre-fixed{
            display: flex;
            flex-direction: row;
            position: -webkit-sticky ;
            position: sticky;
            top: 60px;
            z-index: 10;
        }

        &.movie-page-card{
            width: 30vw;
            align-self: center;
            justify-self: flex-start;
            padding: 10px;
            margin-left: 5vw;
        }


    } 
`

export default Card