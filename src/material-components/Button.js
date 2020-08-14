import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  blueGrey,
  red,
  yellow,
  deepOrange,
  cyan,
  amber,
  deepPurple,
  common,
  teal,
  lime
} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  blueGrey: {
    backgroundColor: blueGrey[800],
    color: "#fff"
  },
  red: {
    backgroundColor: red[800],
    color: "#fff"
  },
  yellow: {
    backgroundColor: yellow[800],
    color: "#fff"
  },
  deepOrange: {
    backgroundColor: deepOrange[800],
    color: "#fff"
  },
  cyan: {
    backgroundColor: cyan[800],
    color: "#fff"
  },
  amber: {
    backgroundColor: amber[800],
    color: "#fff"
  },
  deepPurple: {
    backgroundColor: deepPurple[800],
    color: "#fff"
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>

      <Button className={classes.red}>Default</Button>
      <Button className={classes.blueGrey} disabled>
        Disabled
      </Button>
      <Button className={classes.yellow}>Link</Button>
      <Button className={classes.deepOrange}>Default</Button>
      <Button variant='contained' className={classes.deepPurple}>
        Link
      </Button>
    </div>
  );
}
