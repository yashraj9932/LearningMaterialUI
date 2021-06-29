import React from "react";
import CameraIcon from "@material-ui/icons/Camera";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header</Typography>
        <CameraIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
