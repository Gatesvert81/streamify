import React, { useState } from 'react'
import GenreBtn from '../StyledComponents/GenreBtn'
import Card from '../StyledComponents/Card'
import requests from '../APIRequests/requests'

function GenreTab({ setGenre }) {
    const [active, setActive] = useState("Trending")

    return (
        <Card className="genre-fixed">
            <Card className="genre-tab">
                <GenreBtn onClick={() => { setGenre(requests.fetchTrending); setActive("Trending") }} active={active === "Trending" ? true : false} >
                    Trending
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchNetflixOriginals); setActive("Netflix") }} active={active === "Netflix" ? true : false}>
                    Netflix Originals
            </GenreBtn >
                <GenreBtn onClick={() => {
                    setGenre(requests.fetchTopRated); setActive("Top")
                }} active={active === "Top" ? true : false}>
                    Top Rated
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchActionMovies); setActive("Action") }} active={active === "Action" ? true : false}>
                    Action
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchComedyMovies); setActive("Comedy") }} active={active === "Comedy" ? true : false}>
                    Comedy
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchHorrorMovies); setActive("Horror") }} active={active === "Horror" ? true : false}>
                    Horror
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchAnimationMovies); setActive("Animation") }} active={active === "Animation" ? true : false}>
                    Animation
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchRomanceMovies); setActive("Romance") }} active={active === "Romance" ? true : false}>
                    Romance
            </GenreBtn>
                <GenreBtn onClick={() => { setGenre(requests.fetchDocumentaries); setActive("Docum") }} active={active === "Docum" ? true : false}>
                    Documentaries
            </GenreBtn>
            </Card>
        </Card>
    )
}

export default GenreTab
