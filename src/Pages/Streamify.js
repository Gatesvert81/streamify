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
        <Wrapper>
            <HomeNav />
            <Switch>
                <PrivateRoute path={`/streamify/home`}>
                    <HomePage />
                </PrivateRoute>
                <PrivateRoute path={`/streamify/search`} >
                    <SearchPage />
                </PrivateRoute>
                <PrivateRoute path={`/streamify/mystuff`} >
                    <MyStuffPage />
                </PrivateRoute>
                <PrivateRoute path={`/streamify/profile`} >
                    <ProfilePage />
                </PrivateRoute>
                <PrivateRoute path={`/streamify/movie`} exact component={MoviePage} />
            </Switch>
        </Wrapper>
        </Router>
    )
}

export default Streamify
