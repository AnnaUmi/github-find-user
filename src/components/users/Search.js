import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ cleanUsers, showClean, setAlert, searchUsers }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
          handleSearch={text}
        />
        <input type="submit" value="Search" className="search" />
      </form>
      {showClean && <button onClick={cleanUsers}>Clear</button>}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func,
  cleanUsers: PropTypes.func,
  showClean: PropTypes.bool,
  setAlert: PropTypes.func
};

export default Search;
