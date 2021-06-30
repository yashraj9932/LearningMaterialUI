import {
  createMuiTheme,
  ThemeProvider,
  Paper,
  Typography,
  Grid,
  Button,
  Switch,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { useState } from "react";

const App = () => {
  const [dm, setDm] = useState(true);
  //   const theme = createMuiTheme({
  //     palette: {
  //       type: dm ? "dark" : "light",
  //     },
  //   });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={dm ? darkTheme : greenTheme}>
      <Paper square style={{ height: "100vh" }}>
        <Switch
          checked={dm}
          onClick={(e) => {
            setDm(!dm);
          }}
        ></Switch>
        <Typography variant="h3">This is Yash Raj Goel</Typography>
        <Grid container direction="column">
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
