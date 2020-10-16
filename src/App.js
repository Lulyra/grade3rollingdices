import React, { useState } from "react";
import Button from "./components/Button";
import Dice from "./components/Dice";
import "./App.css";

function App() {
  const [dice1, setDice1] = useState("");
  const [dice2, setDice2] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  function rollDice() {
    return Math.ceil(Math.random() * 6);
  }

  function diceRolling() {
    const promise = new Promise((resolve) => {
      for (let i = 0; i < 500; i++) {
        setTimeout(() => {
          roll();
        }, 400);
      }
      resolve();
    });
    return promise;
  }

  function roll() {
    setDice1(rollDice());
    setDice2(rollDice());
  }

  function finalRoll() {
    setDice1(rollDice());
    setDice2(rollDice());
    setIsRolling(!isRolling);
  }

  function handleClick() {
    diceRolling().then(() => console.log("foi"));
  }

  return (
    <div className="App">
      <div className="dices">
        <Dice dice={dice1} />
        <Dice dice={dice2} />
      </div>
      <br />
      <Button handleClick={handleClick} disabled={isRolling} />
    </div>
  );
}

export default App;
