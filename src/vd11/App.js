import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container justify="center">
      {/* here when we do xs={12} though the justify is center the text doesnt come in center,it is because
    it is taking whole 12 so it is actually centered .just the Yash inside it is not centered */}
      <Grid item xs={12}>
        Yash
      </Grid>
      <Grid item>Raj</Grid>
      <Grid item>Goel</Grid>
    </Grid>
  );
};

export default App;
