import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'
import GenreTab from '../MainComponents/GenreTab'
import HomeWrapper from '../StyledComponents/HomeWrapper'
import Wrapper from '../StyledComponents/Wrapper'
import axios from '../APIRequests/axios'
import requests from '../APIRequests/requests'

function HomePage() {
    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState(requests.fetchTrending)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(genre);
            setMovies(request.data.results)
        } 
        fetchData()
    }, [genre])

    return (
        <HomeWrapper className="homepage">
            <GenreTab setGenre={setGenre} />
            <Wrapper className="homepage-movie-wraprer">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </Wrapper>
        </HomeWrapper>
    )
}

export default HomePage
