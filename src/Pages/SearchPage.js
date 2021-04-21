import React, { useEffect, useState } from 'react'
import Input from '../StyledComponents/Input'
import Wrapper from '../StyledComponents/Wrapper'
import axios from '../APIRequests/axios'
import requests from '../APIRequests/requests'
import MovieCard from '../Components/MovieCard'
import Load from '../Components/Load'

function SearchPage() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const request = await axios.get(`${requests.searchMovies}&language=en-US&query=${search}&page=1&include_adult=false`)
            setMovies(request.data.results) 
            setLoading(false)
        }
        fetchData()
    }, [search])
    return (
        <Wrapper className="search-page" >
            <Input type="text" placeholder="Search" onChange={(e) => handleOnchange(e)} className="search-input" />
            <Wrapper className="search-page-wrapper">
                { loading ? <Load /> :
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Wrapper>

        </Wrapper >
    )
}

export default SearchPage
