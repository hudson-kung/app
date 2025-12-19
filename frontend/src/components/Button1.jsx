import React, { useState } from 'react';

function Button1() {
    const listofcolors = ["red", "blue", "green"];
    const [color, setColor] = useState('black');

    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * listofcolors.length);
        setColor(listofcolors[randomIndex]);
    };
    
    return (
        <div>
            <button 
                onClick={changeColor}
                style={{ 
                    backgroundColor: color,
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    margin: '10px 0'
                }}
            >
                Click to change color
            </button>
        </div>
    );
}

export default Button1;
