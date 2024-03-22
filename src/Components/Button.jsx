import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>Generate</button>
    );
};

export default Button;
