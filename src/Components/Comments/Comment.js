import React, { Component } from "react";

import { connect } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: false,
    };

    this.handleClickComment = this.handleClickComment.bind(this);
  }

  handleClickComment(a, b, c) {
    const { fetchComment } = this.props;
    fetchComment(a, b, c);

    this.setState(() => ({
      comments: true,
    }));
  }

  render() {
    const { issuesData, commentsData } = this.props;

    let userComments =
      commentsData.length > 0 ? (
        commentsData.map((el) => (
          <li key={el.id} className='repoName'>
            <span>{el.body}</span>
          </li>
        ))
      ) : (
        <h4 style={{ marginRight: "10px" }}> No Comments found</h4>
      );

    let userIssueDetails =
      issuesData.length > 0
        ? issuesData.map((el) => (
            <li key={el.id} className='repoName'>
              <span>{el.title}</span>
            </li>
          ))
        : "Saiffff";

    let AddCommUrl =
      issuesData.length > 0 ? commentsData.map((el) => el.html_url) : "Saiffff";

    let AddComments = (
      <li style={{ margin: "30px auto", display: "block", width: "100%" }}>
        <a
          href={AddCommUrl}
          target='_blank'
          rel='noreferrer'
          className='addComments'
        >
          Add Comment
        </a>
      </li>
    );
    return (
      <div>
        <div>
          <div className='mainCon'>
            <div className='registermain'>
              <div className='header'>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to='/'>
                    <ArrowBackIcon className='arrow-home' />
                  </Link>
                  <h1
                    style={{
                      fontSize: "25px",
                      color: "#fb7401",
                    }}
                  >
                    ARSR Frontend Task
                  </h1>
                </div>
              </div>
              <div className='container'>
                <div>
                  <ul>
                    <span className='title'>Issue Details :</span>
                    {userIssueDetails}
                  </ul>
                  <ul>
                    <span className='title'>Comments:</span>
                    {userComments}
                  </ul>
                  <ul>{AddComments}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issuesData: state.issue.issues,
    commentsData: state.comment.comments,
  };
};

export default connect(mapStateToProps, null)(Comment);
