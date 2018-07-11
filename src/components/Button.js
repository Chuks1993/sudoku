import React from 'react';

const Button = (props) => {
    return (
        <a className="btn btn--green btn--animated" onClick={props.onClick}>Start</a>
    )
}

export default Button;