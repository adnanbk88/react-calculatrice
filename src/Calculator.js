import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './calcul.css';

function Calculator() {
    const [input, setInput] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    const clearInput = () => {
        setInput('');
    };

    return (
        <div className="calculator">
            <Display value={input} />
            <div className="keypad">
                <Button label="C" onClick={clearInput} />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((item) => (
                    <Button key={item} label={item} onClick={() => handleInput(item.toString())} />
                ))}
                <Button label="=" onClick={calculateResult} />
            </div>
        </div>
    );
}

export default Calculator;
