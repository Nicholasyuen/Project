import React from "react";

function fourthPage(setPage) {
  return (
    <div>
      Thanks for choosing the xxx plan!
      <button onClick={() => setPage(0)}>Finish</button>
    </div>
  );
}

export default fourthPage;
