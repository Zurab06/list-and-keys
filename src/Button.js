import React from 'react';

const Button = (props) => {
    console.log(props.left)
    return (
            <button className='btn'>{props.left === 0 ? "нет в наличии": "купить"}</button>
    );
};

export default Button;