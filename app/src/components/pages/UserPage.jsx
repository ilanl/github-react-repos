import React, {useContext, useEffect, Fragment} from "react";
import GithubContext from "../../context/github/context";

import {useParams, Link} from "react-router-dom";
import Spinner from "../layout/Spinner";
import RepoList from "../repos/RepoList";

const UserPage = () => {
  const {userName} = useParams();
  const {user, repos, loading, getUser} = useContext(GithubContext);

  useEffect(() => {
    getUser(userName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const {
    name,
    avatar_url,
    bio,
    blog,
    company,
    html_url,
    location,
    public_repos,
    public_gists,
    following,
    followers,
    login,
    hireable
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{width: "150px"}}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>{" "}
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <RepoList repos={repos} />
    </Fragment>
  );
};

export default UserPage;
