import React, { useContext } from 'react'
import Card from '../StyledComponents/Card'
import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import HeadText from '../StyledComponents/HeadText'
import Text from '../StyledComponents/Text'
import Button from '../StyledComponents/Button'
import Icon from '../StyledComponents/Icon'
import plus from '../Assets/plus.svg'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'
import { MovieContext } from '../APIRequests/Context'
import {  useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function MovieCard({movie}) {
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const [ setMoviePage] = useContext(MovieContext)
    const firestore = useFirestore()
    const { uid } = useSelector(state => state.firebase.auth)

    const addToMyStuff = (movie) => {
        firestore
            .collection("users")
            .doc(uid)
            .collection("myStuff")
            .add({...movie})
            .then(() => {
                alert("added to My Stuff")
            })
    }

    return (
        <Card className="movie-card">
            <Image 
            src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} 
            alt="movie" 
            className="movie-image" />
            <Wrapper className="movie-card-text">
                <HeadText>
                    {movie.title}
                </HeadText>
                {/* <Text> */}
                    <TextTruncate 
                    line={1}
                    truncateText="..."
                    text={movie.overview}
                    />
                {/* </Text> */}
                <Link to={`/streamify/movie`}>
                <Button onClick={() => setMoviePage(movie)} >
                    Show
                </Button>
                </Link>
                <Icon onClick={() => addToMyStuff(movie)}>
                    <Image src={plus} alt="plus" className="icon" />
                </Icon>
            </Wrapper>
        </Card>
    )
}

export default MovieCard
