import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import classnames from "classnames";

// const useStyles = makeStyles({
//   buttonStyles: {
//     color: (props) => (props.cool ? "blue" : "red"),
//   },
// });
//
// const useStyles = makeStyles({
//   buttonStyles: (props) => {
//     return {
//       color: props.cool ? "blue" : "red",
//       background: props.cool ? "orange" : "yellow",
//     };
//   },
// });
// The above both logic is same

const useStyles = makeStyles((theme) => ({
  buttonText: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    },
  },
  buttonBackground: {
    backgroundColor: "black",
  },
}));

const CoolButton = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Button
        fullWidth
        className={classnames(classes.buttonText, classes.buttonBackground)}
      >
        Submit
      </Button>
    </>
  );
};

export default CoolButton;
