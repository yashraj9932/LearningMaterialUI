import React from "react";
import {
  Paper,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

//Paper component is basically a tile nothing else with the dark and light theme features

// the elevation is how much elevated we want that paper elemeent to be ,it can have a value betwwen 1 and 24

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        {/* <Paper elevation={1}> */}
        <Typography>This is my text</Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
