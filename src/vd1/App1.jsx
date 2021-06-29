import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme1";

// https://material-ui.com/customization/default-theme/#default-theme

const useStyles = makeStyles({
  helloThereStyles: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px",
  },
});

const App1 = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography
          className={classes.helloThereStyles}
          variant="h1"
          color="primary"
        >
          Hello There
        </Typography>
        <Button variant="contained" color="secondary">
          This is a button
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App1;
