import { makeStyles, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  buttonStyle: {
    color: "green",
  },
});

const Prac = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.buttonStyle}>Submit Please</Button>
    </div>
  );
};

export default Prac;
