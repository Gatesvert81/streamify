import React from 'react'
import GenreBtn from '../StyledComponents/GenreBtn'
import Card from '../StyledComponents/Card'
import requests from '../APIRequests/requests'

function GenreTab({setGenre}) {
    
    return (
        <Card className="genre-tab">
            <GenreBtn onClick={() => setGenre(requests.fetchTrending)}>
                Trending
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchNetflixOriginals)}>
                Netflix Originals
            </GenreBtn >
            <GenreBtn onClick={() => setGenre(requests.fetchTopRated)}>
                Top Rated
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchActionMovies)}>
                Action
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchComedyMovies)}>
                Comedy
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchHorrorMovies)}>
                Horror
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchRomanceMovies)}>
                Romance
            </GenreBtn>
            <GenreBtn onClick={() => setGenre(requests.fetchDocumentaries)}>
                Documentaries
            </GenreBtn>
        </Card>
    )
}

export default GenreTab
