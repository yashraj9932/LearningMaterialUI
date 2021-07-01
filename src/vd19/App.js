// import { CssBaseline } from "@material-ui/core";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/home" to="/home/about" />
        <Route
          exact
          path="/home/:page?"
          render={(props) => <Home {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
