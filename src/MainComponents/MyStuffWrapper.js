import React, { useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
// import Card from '../StyledComponents/Card'
// import HeadText from '../StyledComponents/HeadText'
// import Image from '../StyledComponents/Image'
// import Text from '../StyledComponents/Text'
import Wrapper from '../StyledComponents/Wrapper'
// import bg from '../Assets/bg.jpg'
// import spider from '../Assets/spider.jpg'
// import duff from '../Assets/the-duff.jpg'
// import palm from '../Assets/palm.jpg'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function MyStuffWrapper({setBackground}) {
    const {uid} = useSelector(state => state.firebase.auth)
    useFirestoreConnect({
        collection: `users/${uid}/myStuff` ,
        storeAs: "myStuff"
    })

    const myStuff = useSelector(state => state.firestore.data.myStuff)

    console.log(myStuff)

    // useEffect(() => {
    //     const yes = Object.values(myStuff) ;
    //     console.log("yes", yes)
    //     return yes
    // }, [myStuff])
    

    // const baseUrl = "https://image.tmdb.org/t/p/original/"

    // const picture = (moviePage) => (
    //      `${baseUrl}${moviePage.backdrop_path || moviePage.poster_path}`
    // )
        
    

    


    return (
        <Wrapper className="mystuff-movie-wrapper">
            
            {/* {myStuff &&
                Object.values(myStuff).map((movie) => (
                <MovieCard key={movie.id} movie={movie} 
                onClick={() => setBackground(picture(movie))}
                />
            ))} */}
            {/* <Wrapper>
                <Card className="movie-card" onClick={() => setBackground(bg)} >
                    <Image
                        src={bg}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper>
            <Card className="movie-card" onClick={() => setBackground(spider)}>
                    <Image
                        src={spider}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper>
            <Card className="movie-card" onClick={() => setBackground(palm)}>
                    <Image
                        src={palm}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper>
            <Card className="movie-card" onClick={() => setBackground(duff)}>
                    <Image
                        src={duff}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper>
            <Card className="movie-card" onClick={() => setBackground(bg)}>
                    <Image
                        src={bg}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper>
            <Wrapper>
            <Card className="movie-card" onClick={() => setBackground(spider)}>
                    <Image
                        src={spider}
                        alt="movie"
                        className="movie-image" />
                    <Wrapper className="movie-card-text">
                        <HeadText >
                            Head
                </HeadText>
                        <Text>
                            Overview
                </Text>
                    </Wrapper>
                </Card>
            </Wrapper> */}
            

        </Wrapper>
    )
}

export default MyStuffWrapper
