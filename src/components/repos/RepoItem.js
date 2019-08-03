import React from "react";
import PropTypes from "prop-types";

export default function RepoItem({ repo }) {
  return (
    <div className="repo-item">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
