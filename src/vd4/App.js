import { Button, makeStyles } from "@material-ui/core";
// import { withTheme } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "black",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      {/* When we use this classes property we dont override the initial root class and then rendering something
    on top of that like in className, here we directly apply it to to the core mui class */}
      <Button classes={{ root: classes.root }}>Yash Raj Goel</Button>
    </div>
  );
};

export default App;
