import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MovieState from "./context/movie/state";
import AlertState from "./context/alert/state";

import Navbar from "./components/layout/Navbar";

// Style
import "./App.css";

// import "./styles/Bootstrap.css";
import "./styles/Alert.css";
import "./styles/Search.css";
import "./styles/Weather.css";
import "./styles/Movie.css";

import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <AlertState>
      <MovieState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/movies/:id" component={MoviePage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </MovieState>
    </AlertState>
  );
};

export default App;
