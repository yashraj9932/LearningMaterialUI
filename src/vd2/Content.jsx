import React from "react";
import Cofee from "./Cofee";
import { Grid } from "@material-ui/core";
import cofeeList from "./constants";

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <Cofee {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} style={{ marginTop: "1%" }}>
      {cofeeList.map((coffeMakerObj) => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
