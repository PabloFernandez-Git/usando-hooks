import React, { useState } from 'react'

const App = ({ initialNumber = 23 }) => {

    // state = { number: 10 }
    // const state = useState(0)
    // const number = state[0]
    // [state, ()setState]
    const [number = initialNumber, setNumber] = useState(10)


    const handleIncrement = () => {
        /* this.setState({
            number: this.state.number + 1
        }) */
        setNumber(number + 1)
    }

    const handleDecrement = () => {
        /* this.setState({
            number: this.state.number - 1
        }) */
        setNumber(number - 1)
    }

    const handleReset = () => {
        /* this.setState({
            number: 0
        }) */
        setNumber(0)
    }

    return (
        <>
            <h1>Number: {number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
    
}

App.defaultProps = {
    number: 0
}


export default App;


/*
defaultProps


Podemos pasar a nuestra funcion como prop un valor desde el index.js :

ReactDOM.render(<App initialNumber={100} />, document.getElementById('root'));


Podemos dar a nuestra funcion un estado inicial por si la prop no llega:

const App = ({ initialNumber = 23 }) => {
    const [number = initialNumber, setNumber] = useState(10)
}

Si el useState no tuviera un valor, tomaria primero el valor que llega de 'initialNumber' (viene como prop desde index.js) pero si esta prop no llega toma el valor de '23' que es el valor que le damos dentro de la funcion.

Con esto lo que estamos haciendo es decirle, si te llega la prop 'initialNumer' le asignas ese valor, y sino por defecto le asigna el valor de '23' que es el que esta en la funcion.



*/