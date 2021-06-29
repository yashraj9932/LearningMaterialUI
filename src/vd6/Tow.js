import React from "react";
import { Typography, makeStyles, useTheme } from "@material-ui/core";

//if we want to change colors using makestyles with breakpoints then we need to use theme because the breakpoints
//are defined in the theme wla part

const useStyles = makeStyles((theme) => ({
  typoText: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    },
  },
  typoBackground: {
    backgroundColor: "black",
  },
}));

const Tow = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  //We get the whole theme object of the themeprovider and this can be used to change if we want to change something very specific
  return (
    <>
      <Typography color="primary" className={classes.typoBackground}>
        My Name is Yash Raj
      </Typography>
    </>
  );
};

export default Tow;
