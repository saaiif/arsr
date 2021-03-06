import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchIssue } from "./../../../redux/issue/issueActions";
import { Redirect } from "react-router";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: false,
      value: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(a, b) {
    const { fetchIssue } = this.props;
    fetchIssue(a, b);

    let main = { a, b };

    this.setState(() => ({
      list: true,
      value: main,
    }));
  }

  render() {
    const { usersData } = this.props;
    const { list, value } = this.state;

    if (list === true) {
      return (
        <Redirect
          to={{
            pathname: "/issue",
            state: { main: value },
          }}
        />
      );
    }

    let userRepoName = usersData.map((el) => (
      <li key={el.id} className='repoName'>
        <span
          onClick={() => {
            this.handleClick(el.owner.login, el.name);
          }}
        >
          {el.name ? el.name : "No Repos Found"}
        </span>
      </li>
    ));

    return (
      <div>
        {usersData.loading ? (
          <h1>Loading..</h1>
        ) : usersData.error ? (
          <h2>{usersData.error}</h2>
        ) : (
          <ul>{userRepoName}</ul>
        )}
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
    fetchIssue: (a, b) => dispatch(fetchIssue(a, b)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
