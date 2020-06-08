import React, { useState } from 'react'

const App = () => {

    // state = { number: 10 }
    // const state = useState(0)
    // const number = state[0]
    // [state, ()setState]
    const [number, setNumber] = useState(10)


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
useState

1. No utilizamos clases; las reemplazamos por una funcion.

const App = () => {}


2. Tenemos que utilizar el hook de estado, ese hook se llama 'useState'. 
Todos los hooks comienzan con la palabra 'use' seguido de su funcion.
'useState' nos permite utilizar un estado dentro de funciones.

import React, { useState } from 'react'


3. Para declarar un estado :

const [number, setNumber] = useState(10)

Esto devuelve un array con dos posiciones.
Tendriamos un array con el estado y una funcion que equivaldria al setState.
Esto es lo que tendriamos en el array que devuelve el utilizar la funcion useState(10).
La forma mas normal de declarar un estado es destructurando esto:

[state, ()setState]

Por lo tanto lo que se suele hacer es destructurar el array de la siguiente manera: 

const [number, setNumber] = useState(10)
const [nombre de nuestro estado, funcion que nos va a servir para actualizar ese numero] = useState(10)

En number tenemos guardado el numero '10' que es el estado por defecto.

( De esta forma se declaraba con clases => state = { number: 10 } )


4. Al no ser una clase no necesitamos la funcion render().
El 'return' si es necesario!


5. Las funciones deben estar declaradas usando una constante ('const')

6. Los manejadores (handleIncrement) no necesitan el 'this' (ya que no usamos clases)

7. Para actualizar el estado tenemos la funcion 'setNumber' que creamos previamente.
Como parametro simplemente le tenemos que decir lo que tiene que hacer.

const handleIncrement = () => {
    setNumber(number + 1)
}


*/