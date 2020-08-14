import React from "react";
import { Link } from "react-router-dom"; //Link component for routing
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { grey } from "@material-ui/core/colors";
import "./SimpleNav.css";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navItem: {
    marginRight: "15px",
    color: "#fff",
    border: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className='root'>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: grey[900] }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' className={classes.title}>
            News
          </Typography>

          <Link to='./home'>
            <Typography variant='h6' className={classes.navItem}>
              /Home
            </Typography>
          </Link>
          <Link to='./about'>
            <Typography variant='h6' className={classes.navItem}>
              /About
            </Typography>
          </Link>
          <Link to='./shop'>
            <Typography variant='h6' className={classes.navItem}>
              /Shop
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*
import React from "react";
import { Link } from "react-router-dom"; //Link component for routing
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navItem: {
    marginRight: "10px",
    color: "#fff",
    border: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: grey[900] }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' className={classes.title}>
            News
          </Typography>

          <Typography variant='h6'>
            <Link to='./home'>
              <p className={classes.navItem}>asd</p>
            </Link>
          </Typography>

          <Link to='./home'>
            <Typography variant='h6' className={classes.navItem}>
              asd
            </Typography>
          </Link>

          <Typography variant='h6'>
            <Link to='./home'>
              <p className={classes.navItem}>asd</p>
            </Link>
          </Typography>
          <Typography variant='h6'>
            <Link to='./home'>
              <p className={classes.navItem}>asd</p>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

*/
