import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import React from "react";
import Tow from "./Tow";

// while creating theme like these we shouldimport it from the mui  because colors in palette in theme need
//to have a main property a dark a light property so if we import it from mui it hanldes this for us
//therefore the green that we import is not just a color but an object with all the variants

//What this type:dark does is that we have something called paper in MaterialUI so paper automatically changes
//color,according to the type we define

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: purple,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tow />
    </ThemeProvider>
  );
};

export default App;
