import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Jobs = (props) => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.push("/jobs/engineer")}>engineer</Button>
      <Button onClick={() => history.push("/jobs/marketer")}>marketer</Button>
      <Button onClick={() => history.push("/jobs/designer")}>designer</Button>
    </>
  );
};

export default Jobs;
