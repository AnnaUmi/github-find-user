import React, { useState, Fragment } from "react";
import axios from "axios";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./components/test/store";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import User from "./components/users/User";

import "./App.css";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertState] = useState(null);
  //componentDidMount() {
  //axios.get("https://api.github.com/users").then(res => console.log(res.data));
  //}
  //async componentDidMount() {
  // this.setState({ loading: true });
  // const res = await axios.get(
  // //`https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
  // `https://api.github.com/users`
  // );
  //  this.setState({ users: res.data, loading: false });
  //  }
  const searchUsers = async value => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setUser(res.data);
    setLoading(false);
  };
  const getUsersRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(res.data);
    setLoading(false);
  };
  const cleanUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const setAlert = (text, style) => {
    setAlertState(text, style);
    setTimeout(() => setAlertState(null), 3000);
  };

  return (
    <Router>
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      showClean={users.length > 0 ? true : false}
                      cleanUsers={cleanUsers}
                      setAlert={setAlert}
                    />

                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:username"
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUsersRepos={getUsersRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
            {alert && <Alert alert={alert} />}
          </div>
        </div>
      </ReduxProvider>
    </Router>
  );
};

export default App;
