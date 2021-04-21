import React, { useContext, useEffect, useState } from 'react'
import { usePalette } from 'react-palette'
import TextTruncate from 'react-text-truncate'
import axios from '../APIRequests/axios'
import { API_KEY } from '../APIRequests/requests'
import { MovieContext } from '../APIRequests/Context'
import Button from '../StyledComponents/Button'
import search from '../Assets/search.svg'
import back from '../Assets/back.png'
import Card from '../StyledComponents/Card'
import Text from '../StyledComponents/Text'
import Wrapper from '../StyledComponents/Wrapper'
import MoviePageTab from '../MainComponents/MoviePageTab'
import { Link, useHistory } from 'react-router-dom'
import Image from '../StyledComponents/Image'
import LinkTo from '../StyledComponents/LinkTo'
import Icon from '../StyledComponents/Icon'

function MoviePage() {
    const [truncate, setTruncate] = useState(false)
    const [movieURL, setMovieURL] = useState('')
    const [moviePage, setMoviePage] = useContext(MovieContext)
    let history = useHistory()

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const picture = `${baseUrl}${moviePage.backdrop_path || moviePage.poster_path}`

    const { data } = usePalette(picture)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${moviePage.id}?api_key=${API_KEY}&language=en-US`);
            setMovieURL(request.data.homepage)
        }
        fetchData()
    }, [moviePage.id])

    return (
        <Wrapper className="movie-page-page" moviePageColor={data.darkVibrant}>
            <Wrapper className="movie-page-nav" movieNavColor={data.vibrant}>
                <Wrapper >
                    <Icon className="dot" onClick={() => history.goBack()}>
                        <Image src={back} alt="dot" className="movie-page-nav-icon" />
                    </Icon>
                </Wrapper>
                <Wrapper className="search" >
                    <Link to={`/streamify/search`} >
                        <Image
                            src={search} alt="saerch"
                            className="movie-page-nav-icon" />
                    </Link>
                </Wrapper>
            </Wrapper>
            <Wrapper className="movie-page" movieBg={picture} moviePageColor={data.vibrant} >
                <Card className="movie-page-card">
                    <Wrapper>
                        <Text className="movie-page-title">
                            {moviePage.title || moviePage.original_name}
                        </Text>
                    </Wrapper>
                    <Wrapper className="movie-page-card-text">
                        {truncate ?
                            <Text>
                                {moviePage.overview}
                                <Text onClick={() => setTruncate(!truncate)}> Read Less </Text>
                            </Text>

                            :
                            <TextTruncate
                                line={2}
                                truncateText="..."
                                text={moviePage.overview}
                                textTruncateChild={
                                    <Text onClick={() => setTruncate(!truncate)}>Read More</Text>}
                            />
                        }
                    </Wrapper>
                    <Wrapper className="movie-page-btn">
                        <Wrapper>
                            <LinkTo target="_blank" href={movieURL}>
                                <Button className="primary moviepage-button" >
                                    Watch Movie
                                </Button>
                            </LinkTo>
                        </Wrapper>
                        <Wrapper>
                            <Button className="moviepage-button" >
                                Watch Trailer
                            </Button>
                        </Wrapper>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper >
                <MoviePageTab />
            </Wrapper>
        </Wrapper>
    )
}

export default MoviePage
