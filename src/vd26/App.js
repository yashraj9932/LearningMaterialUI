import Homee from "./Homee";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <Header />

        <Switch>
          <Route exact path="/" component={Homee} />
          {/* <Route exact path="/" render={(props) => <Home {...props} />} /> */}
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
