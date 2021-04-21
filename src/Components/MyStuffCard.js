import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../StyledComponents/Card'
import Icon from '../StyledComponents/Icon'
import deleteIcon from '../Assets/delete.png'
import arrow from '../Assets/forward.png'
import Image from '../StyledComponents/Image'
import Text from '../StyledComponents/Text'
import Wrapper from '../StyledComponents/Wrapper'
import { usePalette } from 'react-palette'
import { MovieContext } from '../APIRequests/Context'

function MyStuffCard({movie}) {
    
    const [ moviePage,setMoviePage] = useContext(MovieContext)
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const picture = `${baseUrl}${movie.backdrop_path || movie.poster_path}`

    const { data } = usePalette(picture)

    return (
        <Card className="movie-card">
            <Image
                src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                alt="movie"
                className="movie-image" />
            <Wrapper className="movie-card-text" textBg={data.vibrant}>
                <Wrapper className="movie-card-hover">
                    <Wrapper className="movie-card-btn">
                        <Wrapper>
                            <Link to={`/streamify/movie`}>
                                <Icon onClick={() => setMoviePage(movie)} className="primary" >
                                    <Image src={arrow} alt="plus" className="primary" />
                                </Icon>
                            </Link>
                        </Wrapper>
                        <Wrapper>
                            <Text className="movie-card-title">
                                {movie.title || movie.original_name}
                            </Text>
                        </Wrapper>
                        <Wrapper>
                            <Icon 
                            className="my-stuff-btn">
                            <Image src={deleteIcon} alt="delete" className="my-stuff-img" />
                            </Icon>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Card>
    )
}

export default MyStuffCard
