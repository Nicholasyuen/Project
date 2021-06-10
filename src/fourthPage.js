import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const FourthPage = ({ setPage, finalChoice }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h4">Thanks for choosing the </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color={"primary"}>
            {finalChoice}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4"> plan!</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button variant="contained" onClick={() => setPage(0)}>
          Finish
        </Button>
      </Grid>
    </div>
  );
};

export default FourthPage;
