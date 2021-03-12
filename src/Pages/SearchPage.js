import React, { useEffect, useState } from 'react'
import Input from '../StyledComponents/Input'
import Wrapper from '../StyledComponents/Wrapper'
import axios from '../APIRequests/axios'
import requests from '../APIRequests/requests'
import MovieCard from '../Components/MovieCard'

function SearchPage() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${requests.searchMovies}&language=en-US&query=${search}&page=1&include_adult=false`)
            setMovies(request.data.results) 
        }
        fetchData()
    }, [search])
    return (
        <Wrapper >
            <Input type="text" placeholder="Search" onChange={(e) => handleOnchange(e)} />
            <Wrapper>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Wrapper>

        </Wrapper >
    )
}

export default SearchPage
