import React, { useContext } from 'react'
import { usePalette } from 'react-palette'
import { Link } from 'react-router-dom'
import { MovieContext } from '../APIRequests/Context'
import Button from '../StyledComponents/Button'
import Card from '../StyledComponents/Card'
import Wrapper from '../StyledComponents/Wrapper'

function MoviePage() {
    const [moviePage] = useContext(MovieContext)

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const picture = `${baseUrl}${moviePage.backdrop_path || moviePage.poster_path}`

    const { data } = usePalette(picture)

    return (
        <Wrapper className="movie-page" movieBg={picture} moviePageColor={data.vibrant} >
            <Card>
                <Wrapper>
                    {moviePage.title}
                </Wrapper>
                <Wrapper>
                    {moviePage.overview}
                </Wrapper>
                <Wrapper>
                    <Link>
                    <Button>
                        Watch Movie
                    </Button>
                    </Link>
                    <Button>
                        Watch Trailer
                    </Button>
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default MoviePage
