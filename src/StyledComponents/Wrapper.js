import styled from 'styled-components'

const Wrapper = styled.div`

    &.form-wrapper{
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
    }

    &.registration-page-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
    }


    &.search{
        margin: 0vh 1vw;
    }

    &.homepage-movie-wraprer{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }

    &.movie-card-text{
        content: '';
        position: absolute;
        color: greenyellow;
        bottom: -50px;
    }

    /* &.movie-card-text:hover > &.{
        bottom: 0px;
    } */
    
    &.mystuff{
        display: flex;
        height: 90vh;
        background: ${props => `linear-gradient(90deg, ${props.pageColor} 5vw, transparent 100vw ), url(${props.background}) no-repeat`  || 'gray' } ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
    }

    &.mystuff-movie-wrapper{
        display: flex;
        align-self: flex-end;
        /* flex-direction: row; */
        /* width: ; */
        overflow-x: scroll; 
    }

    &.movie-page{
        background: ${props => `linear-gradient(90deg, ${props.moviePageColor} 5vw, transparent 100vw ), url(${props.movieBg}) no-repeat`} ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }

`

export default Wrapper