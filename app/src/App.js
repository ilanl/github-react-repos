import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GithubState from "./context/github/state";
import AlertState from "./context/alert/state";

import Navbar from "./components/layout/Navbar";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import UserPage from "./components/pages/UserPage";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users/:userName" component={UserPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
