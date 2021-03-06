import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../../../redux/repo/repoActions";
import List from "../List/List";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { fetchUsers } = this.props;
    fetchUsers(this.state.query);

    console.log(this.state.query);
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    const { usersData } = this.props;
    return (
      <div>
        <div className='mainCon'>
          <div className='registermain'>
            <div className='header'>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1
                  style={{
                    fontSize: "25px",
                    color: "#fb7401",
                  }}
                >
                  ARSR Frontend Task - Repo Name
                </h1>
              </div>
            </div>
            <div className='container'>
              <div className='searchBox'>
                <div>
                  <form onSubmit={this.handleClick} className='form'>
                    <input
                      className='InputField'
                      value={query}
                      onChange={this.handleChange}
                      placeholder='Username'
                    />
                    <button
                      className='searchButton'
                      type='submit'
                      disabled={!query ? true : false}
                    >
                      Search repository
                    </button>
                  </form>
                </div>
              </div>
              {usersData.length > 0 ? (
                <>
                  <List usersData={usersData} query={query} />
                </>
              ) : (
                "No Repos Found"
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    usersData: state.user.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (query) => dispatch(fetchUsers(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
