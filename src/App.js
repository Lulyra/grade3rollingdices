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
    const rollPromises = [];
    for (let i = 0; i < 500; i++) {
      rollPromises.push(rollPromise());
    }
    Promise.all(rollPromises).then(() => {
      setIsRolling(false);
    });
  }

  function roll() {
    setDice1(rollDice());
    setDice2(rollDice());
  }

  function rollPromise() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        roll();
        resolve();
      }, 400);
    });
    return promise;
  }

  function handleClick() {
    setIsRolling(true);
    diceRolling();
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
