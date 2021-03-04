import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainCon: {
    position: "relative",
    backgroundColor: "#142134",
    minHeight: "100vh",
  },

  registermain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    position: "relative",
    width: "100%",
    maxWidth: "980px",
  },

  container: {
    color: "#fff",
    display: "flex",
    backgroundColor: "#000916",
    position: "relative",
    width: "100%",
    maxWidth: "980px",
    minHeight: "465px",
    height: "100%",
    padding: "10px 80px",
    borderRadius: " 4px 0px 0px 4px",
    margin: "15px 10px ",
  },

  searchBox: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  form: {
    display: "flex ",
    alignItems: "center ",
    justifyContent: "center",
    padding: "15px 0px ",
    color: "#fff ",
  },
  divider: {
    color: "#fff ",
    border: "0.5px solid #fff ",
  },

  userTopDivider: {
    background: "#fb7401",
  },
  InputField: {
    background: "#142134",
    color: "#fff",
  },
  InputFieldLabel: {
    color: "#bababa",
  },
  searchButton: {
    borderRadius: "4px",
    backgroundColor: "#fb7401",
    height: "48px",
    marginLeft: "10px",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#fb7401",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "rgba(251, 116, 1, 0.4)",
      color: "rgba(255, 255, 255, 0.6)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
