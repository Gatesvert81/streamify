import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from '../APIRequests/PrivateRoute'
import HomeNav from '../MainComponents/HomeNav'
import Wrapper from '../StyledComponents/Wrapper'
import HomePage from './HomePage'
import MoviePage from './MoviePage'
import MyStuffPage from './MyStuffPage'
import ProfilePage from './ProfilePage'
import SearchPage from './SearchPage'

function Streamify() {

    return (
        <Router>
            <Wrapper className="streamify">
                {/* <HomeNav /> */}
                <Switch>
                    <PrivateRoute path={`/streamify/home`}>
                        <HomeNav />
                        <HomePage />
                    </PrivateRoute>
                    <PrivateRoute path={`/streamify/search`} >
                        <HomeNav />
                        <SearchPage />
                    </PrivateRoute>
                    <PrivateRoute path={`/streamify/mystuff`} >
                        <HomeNav />
                        <MyStuffPage />
                    </PrivateRoute>
                    <PrivateRoute path={`/streamify/profile`} >
                        <HomeNav />
                        <ProfilePage />
                    </PrivateRoute>
                    <PrivateRoute path={`/streamify/movie`} >
                        <MoviePage />
                    </PrivateRoute>
                </Switch>
            </Wrapper>
        </Router>
    )
}

export default Streamify
