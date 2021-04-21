import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Card from '../StyledComponents/Card'
import Image from '../StyledComponents/Image'
import Wrapper from '../StyledComponents/Wrapper'
import Icon from '../StyledComponents/Icon'
import plus from '../Assets/add.png'
import plusbold from '../Assets/check.png'
import dot from '../Assets/dot.png'
import arrow from '../Assets/forward.png'
import Text from '../StyledComponents/Text'
import { Link, useHistory } from 'react-router-dom'
import { MovieContext, MyStuffContext } from '../APIRequests/Context'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { usePalette } from 'react-palette'


toast.configure()
function MovieCard({ movie }) {
    const [stuff, setStuff] = useState(false)
    const [moviePage, setMoviePage] = useContext(MovieContext)
    const firestore = useFirestore()
    const { uid } = useSelector(state => state.firebase.auth)

    const [stuffs] = useContext(MyStuffContext)
    const history = useHistory()

    const addToMyStuff = (movie) => {
        firestore
            .collection("users")
            .doc(uid)
            .collection("myStuff")
            .add({ ...movie })
            .then((docRef) => {
                docRef.update({
                    movieId: docRef.id,
                  });
                  toast.success("Added to My Stuff", {
                    position: toast.POSITION.TOP_CENTER
                }); 
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_CENTER
                }); 
            })
    }

    const deleteFromMyStuff = (movie) => {
        firestore
            .collection("users")
            .doc(uid)
            .collection("myStuff")
            .doc(movie.movieId)
            .delete()
            .then(() => {
                toast.warn("Removed to My Stuff", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_CENTER
                }); 
            })

    }

    useEffect(() => {
        if (stuffs !== null ) {
            const newStuffs = stuffs.filter((movieItem) => movieItem.id === movie.id)
            if (newStuffs.length > 0) {
                setStuff(true)
            } else{
                setStuff(false)
            }           
        } else {
            setStuff(false)
        }
    }, [stuffs, movie.id])


    const handleMyStuff = (movie) => {
        if (stuff) {
            deleteFromMyStuff(movie)
        } else {
            addToMyStuff(movie)
        }
    }

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const picture = `${baseUrl}${movie.backdrop_path || movie.poster_path}`

    const { data } = usePalette(picture)
    return (
        <Card className="movie-card" 
        onClick={() => { setMoviePage(movie) ; history.push("/streamify/movie") }} >
            <Image
                src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                alt="movie"
                className="movie-image" />
            <Wrapper className="movie-card-text" textBg={data.vibrant}>
                <Wrapper className="movie-card-hover">
                    {movie.media_type ? 
                        <Wrapper className="movie-card-text-btn">
                            <Wrapper>
                                <Icon className="dot">
                                    <Image src={dot} alt="dot" className="dot-img" />
                                </Icon>
                            </Wrapper>
                            <Wrapper>
                                <Text className="movie-card-type">
                                    {movie.media_type}
                                </Text>
                            </Wrapper>
                        </Wrapper> : null}
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
                            <Icon onClick={() => handleMyStuff(movie)} className="my-stuff-btn">
                                { stuff ?
                                <Image src={plusbold} alt="plus" className="my-stuff-img" /> :
                                <Image src={plus} alt="plus" className="my-stuff-img" /> }
                            </Icon>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Card>
    )
}

export default MovieCard
