import React, { useState, useEffect } from "react";
import Button from "./Button";
import Dice from "./Dice";
import "../style/RollingDice.css";

function RollingDice(props) {
  const [dices, setDices] = useState({});
  const [dice1, setDice1] = useState("");
  const [dice2, setDice2] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    const tempDices = {};
    for (let i = 0; i < props.numberOfDices; i++) {
      tempDices[`dice${i}`] = "";
    }
    setDices(tempDices);
  }, []);
  console.log(dices);

  function rollDice() {
    return Math.ceil(Math.random() * 6);
  }

  function diceRolling() {
    const rollPromises = [];
    for (let i = 0; i < 1500; i++) {
      rollPromises.push(rollPromise());
    }
    Promise.all(rollPromises).then(() => {
      setIsRolling(false);
    });
  }

  function roll() {
    let tempDices = dices;
    Object.keys(tempDices).forEach((key) => {
      tempDices[key] = rollDice();
    });
    setDices(tempDices);
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
  const componentDices = Object.keys(dices).map((keys) => (
    <Dice dice={dices[keys]} />
  ));

  return (
    <div className="App">
      <div className="dices">{componentDices}</div>
      <br />
      <Button handleClick={handleClick} disabled={isRolling} />
    </div>
  );
}

export default RollingDice;
