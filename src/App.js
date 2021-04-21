import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage';
import { lightTheme, darkTheme } from './StyledComponents/Theme'
import Streamify from './Pages/Streamify';
import { ThemeContext } from './APIRequests/Context';
import PrivateRoute from './APIRequests/PrivateRoute';
import { useContext } from 'react';
import Wrapper from './StyledComponents/Wrapper';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase'
import Load from './Components/Load';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import HomeNav from './MainComponents/HomeNav'
// import HomePage from './Pages/HomePage'
// import MoviePage from './Pages/MoviePage'
// import MyStuffPage from './Pages/MyStuffPage'
// import ProfilePage from './Pages/ProfilePage'
// import SearchPage from './Pages/SearchPage'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Load />;
  return children
}


function App() {
  const [theme] = useContext(ThemeContext)

  const state = useSelector(state => state)
  
  return (
    <Router>
      <Wrapper className="App">
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
          <Switch>
            {/* <ToastContainer /> */}
            <Route exact path="/">
              <LandingPage />
            </Route>
            <PrivateRoute path="/streamify/home">
            {/* <AuthIsLoaded > */}
                  <Streamify />
            {/* </AuthIsLoaded> */}
              </PrivateRoute>
            {/* <PrivateRoute path={`/streamify/home`}>
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
            </PrivateRoute> */}
          </Switch>
        </ThemeProvider>
      </Wrapper>
    </Router>
  );
}

export default App;
