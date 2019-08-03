import React, { Component } from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>{user.login}</h3>
      <Link to={`/user/${user.login}`} className="user-item__btn">
        More
      </Link>
    </div>
  );
};
export default UserItem;
