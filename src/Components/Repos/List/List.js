import React, { useState, useEffect } from "react";
import axios from "axios";
import Issue from "../../Issues/Issue";

function List({ usersData, issueData, query }) {
  const [reponame, setrepoName] = useState("");
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${query}/${reponame}/issues`)
      .then((res) => setIssues(res.data));
  }, [reponame]);

  let userRepoName = usersData.map((el) => (
    <li key={el.id}>
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
        <div>
          {usersData.loading ? (
            <h1>Loading..</h1>
          ) : usersData.error ? (
            <h2>{userError}</h2>
          ) : (
            <ul>{userRepoName}</ul>
          )}
        </div>
      )}
    </>
  );
}

export default List;
