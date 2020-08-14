import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  deepOrange,
  teal
} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    p_wrapper: {
      margin: theme.spacing(1),
      border: "1px solid red",
      color: teal[ 900],
      backgroundColor: deepOrange[400]
     
    },
  }));
  

export default function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.p_wrapper}>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        asdfg
      </div>
    );
  }
  