import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'
import GenreTab from '../MainComponents/GenreTab'
import Banner from '../MainComponents/Banner'
import HomeWrapper from '../StyledComponents/HomeWrapper'
import Wrapper from '../StyledComponents/Wrapper'
import axios from '../APIRequests/axios'
import requests from '../APIRequests/requests'
import Load from '../Components/Load'

function HomePage() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState(requests.fetchTrending)

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const request = await axios.get(genre);
            setMovies(request.data.results)
            setLoading(false)
            const error = await axios.error
        }
        fetchData()
    }, [genre])


    return (
        <HomeWrapper className="homepage">
            <GenreTab setGenre={setGenre} />
            <Wrapper>
                <Banner />
            </Wrapper>
            <Wrapper className="homepage-movie-wraprer">
                {loading ?
                    <Load /> :
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </Wrapper>
        </HomeWrapper>

    )
}

export default HomePage
