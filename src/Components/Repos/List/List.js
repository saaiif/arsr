import React, { useState, useEffect } from "react";
import axios from "axios";
import Issue from "../../Issues/Issue";
import useStyles from "./Style";
import {
  Button,
  TextField,
  Box,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";

function List({ usersData, issueData, query }) {
  const classes = useStyles();
  const [reponame, setrepoName] = useState("");
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${query}/${reponame}/issues`)
      .then((res) => setIssues(res.data));
  }, [reponame]);

  let userRepoName = usersData.map((el) => (
    <li key={el.id} className={classes.repoName}>
      <span
        onClick={() => {
          setrepoName(el.name);
        }}
      >
        {el.name}
      </span>
    </li>
  ));

  let userError = usersData.error;

  return (
    <>
      {issues.length > 0 ? (
        <div>
          <Issue repoIssues={issues} reponame={reponame} query={query} />
        </div>
      ) : (
        <Box >
          {usersData.loading ? (
            <h1>Loading..</h1>
          ) : usersData.error ? (
            <h2>{userError}</h2>
          ) : (
            <ul >{userRepoName}</ul>
          )}
        </Box>
      )}
    </>
  );
}

export default List;
