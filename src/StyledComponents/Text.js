import styled from 'styled-components'

const Text = styled.p`
    color: ${ props => props.theme.textColor};

    
    &.movie-card-title{
        font-family: Raleway;
        /* font-family: Redressed; */
    }

    &.movie-page-title{
        font-family: Raleway;
        font-size: ${props => props.theme.secondarySize};
        font-weight: 600;
    }

    &.movie-card-type{
        font-family: Akaya Telivigala;
    }

    &.movie-detail-title{
        font-family: Raleway;
    }

    &.text{
        font-family: sans-serif;
        font-size: 0.75rem;
    }

    &.genre-detail-text{
        font-family: Raleway;
        font-size: 0.75rem;
        margin-left: 5px;
    }
`

export default Text