import styled from 'styled-components'

const Wrapper = styled.div`

    &.land-nav-btn{
        display: flex;
        flex-direction: row;
    }

    &.land__footer__card__header{
        text-transform: uppercase;
    }

    &.land__footer__card__detail{
        font-family: Raleway;
        font-size: 0.7rem;
    }

    &.registration-nav{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: none;
        justify-self: center;
        align-self: center;
        width: 66%;
    }

    &.sign-btn-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 30px;
        font-family: sans-serif;
        font-size: 0.8rem;
        color: ${props => props.theme.textColor};
        background: none;
        cursor: pointer;
    }

    &.sign-up-select{
        border-bottom: 1px solid ;
        border-color: ${props => props.theme.textColor};
        border: ${props => props.select };
    }

    &.sign-in-select{
        border-bottom: 1px solid ;
        border-color: ${props => props.theme.textColor};
        border: ${props => props.select };
    }

    &.line-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        background: purple;
    }

    &.sign-btn-wrapper:hover{
        background: ${props => props.theme.secondary};
    }

    &.streamify{
        min-height: 100vh;
        background: ${props => props.theme.secondary};
    }

    &.form-wrapper{
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
    }

    &.registration-page{
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.primary};
        border: 1px hidden ;
        border-radius: 10px;
    }

    &.registration-page-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        border: 1px hidden;
        border-radius: 10px;
        background: none;
    }


    &.search{
        margin: 0vh 2vw;
    }

    &.logo{
        margin-left: 5vw;
    }

    &.home-nav-popup{
        margin-right: 5vw;
    }

    &.homepage-movie-wraprer{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    &.movie-card-text{
        content: '';
        position: absolute;
        background: ${props => `linear-gradient(360deg, ${props.textBg} 5% , transparent 100% )` };
        /* background: ${props => props.textBg}; */
        width: 100%;
        height: 60%;
        color: greenyellow;
        bottom: 0;
    }

    &.movie-card-hover {
        width: 100%;
        position: absolute;
        bottom: 0px;
    }

    &.movie-card-btn{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: #242424a8;
    }

    &.movie-card-text-btn{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
    }

    &.search-page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        padding: 100px 5vw 0;
    }

    &.search-page-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    &.mystuff{
        display: flex;
        height: 100vh;
        background: ${props => `linear-gradient(90deg, ${props.pageColor} 5vw, transparent 100vw ), url(${props.background}) no-repeat`  || 'gray' } ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
    }

    &.mystuff__empty{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${ props => props.theme.textColor };
        text-transform: uppercase;
        font-size: 2rem;
        text-align: center;
    }

    &.mystuff-movie-wrapper{
        display: flex;
        align-self: flex-end;
        /* flex-direction: row; */
        /* width: ; */
        overflow-x: scroll; 
    }

    &.movie-page-nav{
        background: ${props => `linear-gradient(180deg, ${props.movieNavColor} 5% , transparent 100% )` };
        /* background: ${props => props.movieNavColor}; */
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 10px 0vw;
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100vw;
    }

    &.movie-page-page{
        background: ${props => props.moviePageColor} ;
    }

    &.movie-page{
        display: flex;
        background: ${props => `linear-gradient(360deg, ${props.moviePageColor} 5vw, transparent 100vw ), url(${props.movieBg}) no-repeat`} ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: ${props => props.banner || "100vh"};
    }

    &.movie-page-btn{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 5px;
        padding: 10px 0;
    }

    &.movie-page-card-text{
        color: white;
        font-family: Akaya Telivigala;
    }

    &.movie-page-tab{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }

    &.movie-videos-section{
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        padding: 0vw 5vw 20px;
        grid-gap: 20px; 
    }

    &.movie-detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.genre-detail{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &.genre-detail-genre{
        display: flex;
        flex-direction: row;
        /* align-items: center;
        justify-content: center; */
        flex-wrap: wrap;
    }

    &.profile-popup-card-user{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;
    }

    &.profile-page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10vh 5vw;
    }

    &.profile__page__edit{
        display: ${props => props.edit ? "block" : "none"} ;
    }

    @media all and (min-width: 400px) {
        &.movie-page{
            display: flex;
            background: ${props => `linear-gradient(90deg, ${props.moviePageColor} 2vw, transparent 100vw ), url(${props.movieBg}) no-repeat`} ;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: ${props => props.banner || "100vh"};
        }

        &.movie-videos-section{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            padding: 0vw 5vw 20px;
            grid-gap: 20px; 
        }

    }

`

export default Wrapper