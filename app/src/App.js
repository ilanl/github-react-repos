import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GithubState from "./context/github/state";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/search/SearchForm";
import UserList from "./components/users/UserList";
import Alert from "./components/alerts/Alert";
import UserPage from "./components/pages/UserPage";

const App = () => {  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, color) => {
    setAlert({message, color});
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <GithubState>
      <div>
        <Navbar />
        <div className="container">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    {alert && (
                      <Alert message={alert.message} color={alert.color} />
                    )}
                    <SearchForm
                      showAlert={showAlert}
                    />
                    <UserList />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/users/:userName"
                render={_ => (
                  <UserPage />
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </GithubState>
  );
};

export default App;
