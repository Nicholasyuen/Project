import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const FirstPage = ({setPage}) => {
  return (
    <Grid>
      <Typography variant="h4">Hello,Welcome to our Website!</Typography>
      <Grid item xs={12} style={{ padding: 10 }}>
        <Button variant="contained" color="primary" onClick={() => setPage(1)}>
          Create a plan
        </Button>
      </Grid>
      <Grid item xs={12} style={{ padding: 10 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setPage(2)}
        >
          Choose a plan
        </Button>
      </Grid>
    </Grid>
  );
}

export default FirstPage;
