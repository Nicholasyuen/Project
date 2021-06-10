import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import firstPage from "./firstPage";
import fourthPage from "./fourthPage";
import secondPage from "./secondPage";
import thridPage from "./thridPage";

function App() {
  const [page, setPage] = useState(0);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {page === 0 && firstPage(setPage)}
      {page === 1 && secondPage(setPage)}
      {page === 2 && thridPage(setPage)}
      {page === 3 && fourthPage(setPage)}
    </Grid>
  );
}

export default App;
