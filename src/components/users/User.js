import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ getUser, getUsersRepos, user, loading, repos, match }) => {
  useEffect(() => {
    getUser(match.params.username);
    getUsersRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  const hireableField = hireable ? (
    <i className="fas fa-check" />
  ) : (
    <i className="fas fa-times-circle" />
  );

  return (
    <div>
      <Link to="/">Back to Search</Link>
      Hireable: {hireableField}
      <div className="card">
        <div className="card__section">
          <img className="card__img" src={avatar_url} alt={name} />
          <h1>{name}</h1>
          <div className="card__item">Location: {location}</div>
        </div>
        <div className="card__section">
          {bio && (
            <div className="card__bio">
              <h3>Bio:</h3>
              {bio}
            </div>
          )}
          <a target="_blank" href={html_url} rel="noopener noreferrer">
            Visit Github Pfofile
          </a>
          <ul>
            {login && <li>Username: {login}</li>}
            {company && <li> >Company: {company}</li>}
            {blog && (
              <li>
                Website:{" "}
                <a href={blog} target="_blank" rel="noopener noreferrer">
                  {blog}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card__followes">Followers: {followers}</div>
        <div className="card__followes">Following,: {following}</div>
        <div className="card__followes">Public Repos: {public_repos}</div>
        <div className="card__followes">Public Gists: {public_gists}</div>
      </div>
      <div className="card">
        <Repos repos={repos} />
      </div>
    </div>
  );
};
User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUsersRepos: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};
export default User;
