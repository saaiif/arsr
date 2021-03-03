import React, { useState, useEffect } from "react";
import axios from "axios";
function Issue({ repoIssues, query, reponame }) {
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

  let userRepoName =
    repoIssues !== undefined
      ? repoIssues.map((el) => (
          <li key={el.id}>
            <span
              onClick={() => {
                setNumber(el.number);
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
          <li key={el.id}>
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
          <li key={el.id}>
            <span>{el.body}</span>
          </li>
        ))
      : "Saiffff";

  let AddComments =
    repoIssues !== undefined
      ? comments.map((el) => (
          <li key={el.id}>
            <a href={el.html_url} target='_blank'>
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
          <ul>Comments:{userComments}</ul>
          <ul>{AddComments}</ul>
        </div>
      ) : (
        <div>
          {" "}
          <ul>Issue Details :{userIssueDetails}</ul>
          <ul>Issue Url: {userRepoName}</ul>
        </div>
      )}
    </>
  );
}

export default Issue;
