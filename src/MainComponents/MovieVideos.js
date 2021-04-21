import React, { useContext, useEffect, useState } from 'react'
// import movieTrailer from 'movie-trailer'

import axios from '../APIRequests/axios'
import Wrapper from '../StyledComponents/Wrapper'
import { MovieContext } from '../APIRequests/Context'
import { API_KEY } from '../APIRequests/requests'
// import Card from '../StyledComponents/Card'
import VideoCard from '../Components/VideoCard'
import Load from '../Components/Load'

function MovieVideos() {
    const [moviePage, setMoviePage] = useContext(MovieContext)
    const [trailerURL, setTrailerURL] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/movie/${moviePage.id}/videos?api_key=${API_KEY}&language=en-US`);
            setTrailerURL(request.data.results)
            setLoading(false)
        } 
        fetchData()
    }, [moviePage.id])

    console.log(trailerURL)

    return (
        <Wrapper className="movie-videos-section">
            { loading ? <Load /> :
                trailerURL.map((trailer) => (
                    <Wrapper key={trailer.id}>
                        <VideoCard movie={trailer} />
                    </Wrapper>
                ))
            }
        </Wrapper>
    )
}

export default MovieVideos
