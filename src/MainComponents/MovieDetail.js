import React, { useContext, useEffect, useState } from 'react'
import axios from '../APIRequests/axios'
import { MovieContext } from '../APIRequests/Context';
import { API_KEY } from '../APIRequests/requests';
import Icon from '../StyledComponents/Icon';
import dot from '../Assets/dot.png'
import released from '../Assets/date.png'
import later from '../Assets/calendar.png'
import star from '../Assets/star.png'
import Image from '../StyledComponents/Image';
import Text from '../StyledComponents/Text';
import Wrapper from '../StyledComponents/Wrapper'

function MovieDetail() {
    const [moviePage] = useContext(MovieContext)
    const [movie, setMovie] = useState({ genres: [] })

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${moviePage.id}?api_key=${API_KEY}&language=en-US`);
            setMovie(request.data)
        }
        fetchData()
    }, [moviePage.id])

    console.log(movie)
    // const viewMovie = (movie) => {
    //     return movie.id
    // }

    return (
        <Wrapper className="movie-detail">
            <Wrapper>
                <Text className="movie-card-title movie-detail-title">
                    {moviePage.title || moviePage.original_name}
                </Text>
            </Wrapper>
            <Wrapper>
                <Text className="text">
                    {movie.tagline}
                </Text>
            </Wrapper>
            <Wrapper className="genre-detail">
                <Wrapper>
                    <Icon className="dot">
                        <Image src={dot} alt="dot" className="dot-img" />
                    </Icon>
                </Wrapper>
                {movie.genres.map((genre, index) => (
                    <Wrapper className="" key={genre.id}>
                        { index + 1 === movie.genres.length ?
                            <Text className="genre-detail-text">
                                {genre.name}
                            </Text> :
                            <Text className="genre-detail-text">
                                {genre.name},
                            </Text>
                        }
                    </Wrapper>
                ))}
            </Wrapper>
            <Wrapper className="movie-card-text-btn" >
                <Wrapper>
                    {movie.status === "Released" ?
                        <Image src={released} alt="dot" className="detail-img" /> :
                        <Image src={later} alt="dot" className="detail-img" />
                    }
                </Wrapper>
                <Wrapper>
                    <Text className="text">
                        {movie.release_date} - {movie.status}
                    </Text>
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Wrapper className="movie-card-text-btn" >
                    <Wrapper>
                        <Image src={star} alt="dot" className="detail-img" />
                    </Wrapper>
                    <Wrapper>
                        <Text className="movie-card-type">
                            {movie.vote_average}
                        </Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default MovieDetail
