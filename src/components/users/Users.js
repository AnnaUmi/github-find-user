import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        users.map(user => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};
Users.ropTypes = {
  loading: PropTypes.bool,
  users: PropTypes.array
};
export default Users;
