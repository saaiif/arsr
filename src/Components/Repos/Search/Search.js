import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchUsers } from "./../../../redux/repo/repoActions";
import List from "../List/List";

function Search({ usersData, fetchUsers }) {
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    fetchUsers(query);
  };
  console.log(
    usersData.map((el) => el.name),
    "usersData"
  );

  return (
    <>
      <form onSubmit={handleClick}>
        <TextField value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit'>Search repository</Button>
      </form>
      {usersData.length > 0 ? (
        <List usersData={usersData} query={query} />
      ) : (
        "No Repos Find"
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (query) => dispatch(fetchUsers(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
