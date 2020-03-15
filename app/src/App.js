import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import SearchForm from "./components/search/SearchForm";
import UserList from "./components/users/UserList";
import Alert from "./components/alerts/Alert";
import UserPage from "./components/pages/UserPage";

import api from "./api";

const initialUsers = [];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const showAlert = (message, color) => {
    setAlert({message, color});
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const searchUsers = async text => {
    setLoading(true);
    const results = await api.searchUsers(text);
    setUsers(results);
    setLoading(false);
  };

  const getUser = async userName => {
    if (loading) {
      return;
    }

    setLoading(true);
    const [user, repos] = await Promise.all([
      api.getUser(userName),
      api.getUserRepos(userName)
    ]);

    setUser(user);
    setRepos(repos);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers(initialUsers);
  };

  return (
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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showAlert={showAlert}
                    showClearButton={users.length > 0}
                  />
                  <UserList users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/users/:userName"
              render={_ => (
                <UserPage user={user} getUser={getUser} repos={repos} />
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
