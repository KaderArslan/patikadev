import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    inherit:{ 
        color: "#4543FF",
      }
  }));

function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link to="#goSomewhere" className={classes.inherit}>
          Kader Arslan{" "}
        </Link>
        {year}
      </Typography>
    );
}
export default Footer;
