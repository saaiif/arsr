import React, { useState, useEffect } from "react";
import axios from "axios";

import useStyles from "./Style";
function Issue({ repoIssues, query, reponame }) {
  const classes = useStyles();
  const [number, setNumber] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
          https://api.github.com/repos/${query}/${reponame}/issues/${number}/comments`
      )
      .then((res) => setComments(res.data));
  }, [number]);

  console.log(repoIssues, "repoIssues");
  const check = (comments) => {
    if (comments == 0) {
      alert("No Comments Found");
    }
  };

  let userRepoName =
    repoIssues !== undefined
      ? repoIssues.map((el) => (
          <li key={el.id} className={classes.repoName}>
            <span
              onClick={() => {
                setNumber(el.number);
                check(el.comments);
              }}
            >
              {el.url}
            </span>
          </li>
        ))
      : "Saiffff";

  let userIssueDetails =
    repoIssues !== undefined
      ? repoIssues.map((el) => (
          <li key={el.id} className={classes.repoName}>
            <span
              onClick={() => {
                setNumber(el.number);
              }}
            >
              {el.title}
            </span>
          </li>
        ))
      : "Saiffff";

  let userComments =
    repoIssues !== undefined
      ? comments.map((el) => (
          <li key={el.id} className={classes.repoName}>
            <span>{el.body}</span>
          </li>
        ))
      : "Saiffff";

  let AddComments =
    repoIssues !== undefined
      ? comments.map((el) => (
          <li
            key={el.id}
            style={{ margin: "30px auto", display: "block", width: "100%" }}
          >
            <a
              href={el.html_url}
              target='_blank'
              rel='noreferrer'
              className={classes.addComments}
            >
              Add Comment
            </a>
          </li>
        ))
      : "Saiffff";

  return (
    <>
      {comments.length > 0 ? (
        <div>
          {" "}
          <ul>
            <span className={classes.title}>Issue Details :</span>
            {userIssueDetails}
          </ul>
          <ul>
            <span className={classes.title}>Comments:</span>
            {userComments}
          </ul>
          <ul>{AddComments}</ul>
        </div>
      ) : (
        <div>
          {" "}
          <ul>
            <span className={classes.title}>Issue Url: </span>
            {userRepoName}
          </ul>
        </div>
      )}
    </>
  );
}

export default Issue;
