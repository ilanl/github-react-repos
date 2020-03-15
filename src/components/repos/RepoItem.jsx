import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({repo}) => {
  const {name, description, html_url, homepage, language, license} = repo;
  return (
    <div className="card">
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      {description && <div>{description}</div>}
      {language && <div>Language: {language}</div>}
      {homepage && (
        <a href={homepage} className="badge badge-primary btn-demo">
          Demo
        </a>
      )}
      {license && (
        <button className="badge badge-primary bg-light" disabled>
          {license.name}
        </button>
      )}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
