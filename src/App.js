import React, { useState } from "react";
import RollingDice from "./components/RollingDice";

function App() {
  return (
    <div className="App">
      <RollingDice numberOfDices={1} />
    </div>
  );
}

export default App;
