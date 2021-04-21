import React, { useState } from 'react'
import GenreBtn from '../StyledComponents/GenreBtn'
import Wrapper from '../StyledComponents/Wrapper'
import MovieDetail from './MovieDetail'
import MovieVideos from './MovieVideos'

function MoviePageTab() {
    const [tabDisplay, setTabDisplay] = useState("Videos")
    return (
        <Wrapper >
            <Wrapper className="movie-page-tab">
                <GenreBtn onClick={() => setTabDisplay("Videos")} active={tabDisplay === "Videos" ? true : false}>
                    Videos
                </GenreBtn>
                <GenreBtn onClick={() => setTabDisplay("Details")} active={tabDisplay === "Details" ? true : false}>
                    Details
                </GenreBtn>
            </Wrapper>
            {tabDisplay === "Videos" ? <MovieVideos /> : <MovieDetail />}
        </Wrapper>
    )
}

export default MoviePageTab
