import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Drawer from "./Drawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        {/* {console.log()} */}
        <Drawer />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
