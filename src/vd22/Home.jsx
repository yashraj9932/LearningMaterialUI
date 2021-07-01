import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.push("/about")}>ABOUT</Button>
      <Button onClick={() => history.push("/jobs")}>JOBS</Button>
    </>
  );
};

export default Home;
