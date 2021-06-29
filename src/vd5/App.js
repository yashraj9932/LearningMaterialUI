import {
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { purple, red } from "@material-ui/core/colors";
import Tdemo from "./Tdemo";

const useStyles = makeStyles({
  root: {
    noWrap: true,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: {
    fontFamily: "Arial",
  },
});

const App = () => {
  const classes = useStyles();
  //   const val =
  //     "Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj GoelYash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel Yash Raj Goel";
  return (
    <>
      <Typography
        classes={{ noWrap: classes.root }}
        // noWrap={val.length > 500 ? true : false}
      >
        {/* {val} */}
      </Typography>
      <ThemeProvider theme={theme}>
        <Tdemo />
      </ThemeProvider>
    </>
  );
};

export default App;
