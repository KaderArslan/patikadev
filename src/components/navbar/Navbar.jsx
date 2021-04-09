import React from "react";
import { AppBar,Toolbar,Popover,Grid,Button,Typography,
  ThemeProvider,ListItemAvatar,Avatar,makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles =makeStyles( (theme) => ({
container: {
    width: 1170,
    margin: "auto"
},
grow: {
    flexGrow: 1
},
AppBar: {
    backgroundColor: "#fff",
    backgroundSize: "cover"
},
loginButton: {
    background: "#4543FF",
    color: "#fff",
    borderRadius: "5px",
    padding: "0px 25px",
    height: "40px",
  
    "&:hover": {
    background: "#0069D9",
    color: "#fff",
    boxShadow: "0px 2px 10px #888888"
    }
},
buttonFontSize: {
    fontSize: "18px",
    color: "#fff"
},
}));

function NavBar() {

  let username = localStorage.getItem("name");

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const id = open ? "simple-popover" : undefined;
    return(
        <>
        <ThemeProvider>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        elevation={4}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      ></Popover>

      <AppBar position="static" color="default" className={classes.AppBar}>
      <Grid item sm={12} xs={12}  >
        <Toolbar style={{ background: "#fff" }}>

        <Grid className={classes.grow}>
        <ListItemAvatar>
            <Avatar alt="Profile Picture" src={"https://picsum.photos/200/300"} />
        </ListItemAvatar>
        </Grid>
        
        <Grid className={classes.container}>
        <Typography style={{ color: "#000" }} variant="h5" >
            {username}
        </Typography>
        </Grid>
 
        <Button onClick={handleMenuClose}
        className={[classes.buttonFontSize, classes.loginButton]}>
          <Link to="/" >
            LogOut
          </Link>
        </Button>
          
        </Toolbar>
        </Grid>
      </AppBar>
    </ThemeProvider>
        </>
    )
}

export default NavBar;