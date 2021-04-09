import React from "react";
import {Box, Grid, CssBaseline, Typography,makeStyles} from "@material-ui/core";

import logo from "../../assets/images/patikaLogo.png";
import SignInForm from "./forms/SignInForm";
import Footer from "../footer/Footer"

//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  primary:{ 
    color: "#4543FF",
  }
}));

function SignIn() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} square>
        <div className={classes.paper}>
          <img src={logo} width="120" alt="patikaLogo" style={{ marginTop: 50 , marginBottom: 20}} />

          <Typography color="primary" component="h4" variant="h4" style={{ marginBottom: 20 }}>
            TO DO
          </Typography>
          <SignInForm /> {/* SignInForm Component */}
        </div>
        <Box>
          <Footer /> {/* Footer */}
        </Box>
      </Grid>
    </Grid>
  );
}
export default SignIn;