import React, { useContext } from 'react'
import { MyStuffContext } from '../APIRequests/Context'
import MyStuffCard from '../Components/MyStuffCard'
import Wrapper from '../StyledComponents/Wrapper'

function MyStuffWrapper({setBackground}) {
    const [stuffs] = useContext(MyStuffContext)

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const setPic = (movie) => {
        const picture = `${baseUrl}${movie.backdrop_path || movie.poster_path}`
        setBackground(picture)
    }


    return (
        <Wrapper className="mystuff-movie-wrapper">
            { stuffs === null ? 
            <Wrapper className="mystuff__empty" >
                Please add a movie
            </Wrapper> :
                stuffs.map((movie) => (
                    <Wrapper key={movie.id} onClick={() => setPic(movie)}>
                        <MyStuffCard movie={movie} />
                    </Wrapper>
                ))
            }
        </Wrapper>
    )
}

export default MyStuffWrapper
