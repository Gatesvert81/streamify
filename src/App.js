import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage';
import theme from './StyledComponents/Theme';
import Streamify from './Pages/Streamify';
import Context from './APIRequests/Context';
import PrivateRoute from './APIRequests/PrivateRoute';


function App() {


  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Context>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <PrivateRoute path="/streamify/home">
                <Streamify />
              </PrivateRoute>
            </Switch>
          </Context>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
