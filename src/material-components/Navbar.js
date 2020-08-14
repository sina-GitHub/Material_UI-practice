import React from "react";
import { Link } from "react-router-dom"; //Link component for routing

// ##### Material UI #####
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

// ##### Icons #####
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import BrandIcon from "@material-ui/icons/CheckCircle";

// ##### styles #####
import "./styles/Navbar.css";
import * as Color from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  titleTxt: {
    margin: "0 1px",
    [theme.breakpoints.down("md")]: {
      margin: "0 10px 0 0"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: 150
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navItem: {
    marginRight: "15px",
    color: "#333",
    border: "none",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      color: "#fff",
      width: "auto"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // ##### open menu #####
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // ##### mobile view #####
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* ##### Items in menu #####  */}
      <MenuItem>
        <Link to='./home'>
          <Typography variant='h6' className={classes.navItem}>
            /Home
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='./asdf'>
          <Typography variant='h6' className={classes.navItem}>
            /asdf
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='./ddd'>
          <Typography variant='h6' className={classes.navItem}>
            /ddd
          </Typography>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {/* ##### WideScreen view ##### */}
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: Color.grey[900] }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
          >
            <BrandIcon className={classes.title} variant='h6' noWrap />
          </IconButton>
          <Typography className={classes.titleTxt} variant='h6'>
            2sb.ir
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='./home'>
              <Typography variant='h6' className={classes.navItem}>
                /Home
              </Typography>
            </Link>
            <Link to='./asdf'>
              <Typography variant='h6' className={classes.navItem}>
                /asdf
              </Typography>
            </Link>
            <Link to='./ddd'>
              <Typography variant='h6' className={classes.navItem}>
                /ddd
              </Typography>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            {/* ##### more menu ##### */}
            <IconButton onClick={handleMobileMenuOpen} color='inherit'>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
