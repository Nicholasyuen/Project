import React from "react";
import services from "./services";
import plans from "./plans";

function thridPage(setPage) {

  return (
    <div>
      choose a plan
      <button onClick={() => setPage(3)}>Confirm</button>
    </div>
  );
}

export default thridPage;
