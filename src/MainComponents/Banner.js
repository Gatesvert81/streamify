import React, { useContext, useEffect, useState } from 'react'
import axios from '../APIRequests/axios'
import Card from '../StyledComponents/Card'
import Text from '../StyledComponents/Text'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'
import Button from '../StyledComponents/Button'
import requests from '../APIRequests/requests'
import Wrapper from '../StyledComponents/Wrapper'
import { MovieContext } from '../APIRequests/Context'
import { usePalette } from 'react-palette'

function Banner() {

    const [movies, setMovies] = useState([])
    const [moviePage, setMoviePage] = useContext(MovieContext)

    useEffect(() => {
        // setLoading(true)
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            // setLoading(false)
        }
        fetchData()
    }, [])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const picture = `${baseUrl}${movies.backdrop_path || movies.poster_path}`

    const { data } = usePalette(picture)

    return (
        <Wrapper className="movie-page" movieBg={picture} moviePageColor={data.vibrant} banner="40vh">
            <Card className="movie-page-card">
                <Wrapper>
                    <Text className="movie-page-title">
                        {movies.title || movies.original_name}
                    </Text>
                </Wrapper>
                <Wrapper className="movie-page-card-text">
                    <TextTruncate
                        line={2}
                        truncateText="..."
                        text={movies.overview}
                    // textTruncateChild={
                    //     <Text onClick={() => setTruncate(!truncate)}>Read More</Text>}
                    />
                </Wrapper>
                <Wrapper className="movie-page-btn">
                    <Wrapper>
                        <Link to={`/streamify/movie`}>
                            <Button onClick={() => setMoviePage(movies)} className="primary moviepage-button" >
                                View
                                </Button>
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Card>
        </Wrapper>
    )
}

export default Banner
