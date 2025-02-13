import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchComment } from "../../redux";
import { Link, Redirect } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

class Issue extends Component {
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
    const { issuesData } = this.props;

    const main =
      this.props.location && this.props.location.state.main
        ? this.props.location.state.main
        : { a: "saaiif", b: "admin" };

    if (this.state.comments === true) {
      return <Redirect to='/comment' />;
    }

    let userRepoName =
      issuesData.length > 0
        ? issuesData.map((el) => (
            <li key={el.id} className='repoName'>
              <span
                onClick={() =>
                  this.handleClickComment(main.a, main.b, el.number)
                }
              >
                {el.url}
              </span>
            </li>
          ))
        : "No Issues Found";
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
                  {" "}
                  <ul>
                    <span className='title'>Issue Url: </span>
                    {userRepoName}
                  </ul>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchComment: (a, b, c) => dispatch(fetchComment(a, b, c)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
