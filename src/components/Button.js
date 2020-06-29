import React from 'react';

function Button(props) {
    return (
	  <button className="big-button" onClick={props.handleClick}> Roll </button>
    )
}

export default Button;