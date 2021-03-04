import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { fetchUsers } from "./../../../redux/repo/repoActions";
import List from "../List/List";

import useStyles from "./Style";

function Search({ usersData, fetchUsers }) {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    fetchUsers(query);
  };
  console.log(
    usersData.map((el) => el.name),
    "usersData"
  );

  return (
    <Box>
      <Box className={classes.mainCon}>
        <Box className={classes.registermain}>
          <Box className={classes.header}>
            <Box display='flex' alignItems='center'>
              <Typography
                style={{
                  fontSize: "25px",
                  color: "#fb7401",
                }}
              >
                ARSR Frontend Task
              </Typography>
            </Box>
          </Box>
          <Box className={classes.container}>
            <Box className={classes.searchBox}>
              <Grid item container xs={12}>
                <Grid item lg={12} sm={12} md={12} xs={12} spacing={1}>
                  <>
                    <form onSubmit={handleClick} className={classes.form}>
                      <TextField
                        variant='outlined'
                        label='Username'
                        InputProps={{
                          className: classes.InputField,
                        }}
                        InputLabelProps={{
                          className: classes.InputFieldLabel,
                        }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <Button
                        variant='contained'
                        className={classes.searchButton}
                        type='submit'
                        disabled={!query ? true : false}
                      >
                        Search repository
                      </Button>
                    </form>
                    <Divider className={classes.userTopDivider} />
                    {usersData.length > 0 ? (
                      <List usersData={usersData} query={query} />
                    ) : (
                      "No Repos Find"
                    )}
                  </>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
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
