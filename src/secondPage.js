import React from "react";
import services from "./services";

function secondPage(setPage) {
  const selectPage = (number) => {
    setPage(number);
   };
 
  return (
    <div>
      Create a plan
      <button onClick={() => setPage(2)}>Submit</button>
    </div>
  );
}

export default secondPage;
