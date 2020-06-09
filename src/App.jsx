import React, { useState } from 'react'

const App = ({ initialNumber = 23 }) => {
    
    const [number = initialNumber, setNumber] = useState(10)
    const [text, setText] = useState('')

    const handleIncrement = () => {
        setNumber(number + 1)
    }

    const handleDecrement = () => {
        setNumber(number - 1)
    }

    const handleReset = () => {
        setNumber(0)
    }

    const handleInput = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <h1>Number: {number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <p>Contenido del input {text}</p>
            <input type="text" onChange={handleInput} />
        </>
    );
    
}

export default App;


/*
useState con strings

A diferencia de cuando trabajamos con clases podemos crear varios estados, y de hecho se recomienda crear un estado distinto para cada variable.

const [text, setText] = useState('')

<p>Contenido del input {text}</p>
<input type="text" onChange={handleInput} />

const handleInput = (e) => {
    setText(e.target.value)
}


Creamos la funcion utilizando/capturando el evento (e) y se lo pasamos como valor del 'setState' (usando 'e.target.value').
Cuando el valor del input cambia el evento 'onChange' lo detecta y a traves del 'handleInput' modifica el valor del texto.
El texto cambia su valor y se renderiza dentro del <p></p>


*/