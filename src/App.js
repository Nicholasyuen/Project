import React, {useState } from "react";
import Grid from "@material-ui/core/Grid";
import FirstPage from "./firstPage";
import FourthPage from "./fourthPage";
import SecondPage from "./secondPage";
import ThridPage from "./thridPage";

function App() {
  const [page, setPage] = useState(0);
  const [finalChoice, setFinalChoice] = useState(null);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {page === 0 && <FirstPage setPage={setPage} />}
      {page === 1 && <SecondPage setPage={setPage} />}
      {page === 2 && (
        <ThridPage setPage={setPage} setFinalChoice={setFinalChoice} />
      )}
      {page === 3 && <FourthPage setPage={setPage} finalChoice={finalChoice} />}
    </Grid>
  );
}

export default App;
