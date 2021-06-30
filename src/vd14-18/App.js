import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./Pokemon";
import Pokedex from "./Pokedex";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        <Route
          exact
          path="/:pokemonId"
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
