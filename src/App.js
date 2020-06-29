import React, {useState} from 'react';
import Button from './components/Button'
import Dice from './components/Dice'
import './App.css';

function App() {
  const [dice1, setDice1] = useState('');
  const [dice2, setDice2] = useState('');

    function rollDice() {
      return Math.ceil(Math.random()*6)
  }

  function handleClick() {
      setDice1(rollDice());
      setDice2(rollDice());
  }

  return (
    <div className="App">
        <Dice dice={dice1} />
        <Dice dice={dice2} />
        <br/>
        <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
