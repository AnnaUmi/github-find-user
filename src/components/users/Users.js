import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
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
