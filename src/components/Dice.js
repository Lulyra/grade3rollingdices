import React from 'react';
import dice1 from '../img/dice-1.png'
import dice2 from '../img/dice-2.png'
import dice3 from '../img/dice-3.png'
import dice4 from '../img/dice-4.png'
import dice5 from '../img/dice-5.png'
import dice6 from '../img/dice-6.png'


function Dice(props) {
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
    function rollAnimation() {

    }



    if(!props.dice) {
        return(
            <div>
		</div>
	  )
    }
    return (
	  <img className="dice" src={dice[props.dice - 1]} alt='Dice value'/>
    )
}

export default Dice;