import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    //   spacing : 0 to 10 -> X8px
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>(2)</Paper>
        </Grid>
        <Grid item xs sm>
          <Paper className={classes.paper}>three</Paper>
        </Grid>
        <Grid item xs={4} sm={8}>
          <Paper className={classes.paper}>three</Paper>
        </Grid>
        <Grid item xs sm>
          <Paper className={classes.paper}>three</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
