import styled from 'styled-components'

const Card = styled.div`

    &.home-tap{
        display: flex;
        flex-direction: row;
    }

    &.genre-tab{
        display: flex;
        justify-content: center;
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

    &.movie-card:hover > .movie-card-text {
        bottom: 0px;
    }

    &.movie-card::before{
        background: blue;
    }

    &.profile-pic-card{
        width: 200px;
        height: 200px;
        border: 1px solid black;
        border-radius: 100px;
        overflow: hidden;
    }
`

export default Card