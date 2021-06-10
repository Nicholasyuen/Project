import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function firstPage(setPage) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      Hello,Welcome to our Website!
      <Grid xs={12}>
        <Button onClick={() => setPage(1)}>Create a plan</Button>
      </Grid>
      <Grid xs={6}>
        <Button onClick={() => setPage(2)}>Choose a plan</Button>
      </Grid>
    </Grid>
  );
}

export default firstPage;
