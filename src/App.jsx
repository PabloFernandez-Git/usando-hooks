import React, { useState, useEffect } from 'react'

const App = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleCounter1 = () => setCounter1(counter1 + 1)
    const handleCounter2 = () => setCounter2(counter2 + 1)

    useEffect(() => {
        console.log('USE EFFECT')
    }, [counter1, counter2]);

    return (
        <>
            <h2>Counter 1: {counter1}</h2>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={handleCounter1}>Counter 1</button>
            <button onClick={handleCounter2}>Counter 2</button>
        </>
    );
}


export default App;

/*
Control de ejecución de useEffect


1. Debemos importarlo como cualquier dependencia, componente o funcion para utilizarlo.

import React, { useState, useEffect } from 'react'

2. Al cargar la pagina 'useEffect' se dispara una vez porque el componente se ha montado.
Al clickear en 'contador 1' o 'contador 2' como el estado cambia 'useEffect' vuelve a ejecutarse.

useEffect( () => {
    console.log('USE EFFECT')
});

Va a haber ocasiones en las que no queremos que si se hace un re-render 'useEffect' se vuelva a ejecutar.
Es decir vamos a querer que se ejecute solo una vez al montarse.
Para ello tenemos lo que se denomina 'control de dependencias'.  

Se indica despues de las {}, ponemos una coma (,) y aca es donde escribimos la lista de dependencias que tiene que estar vigilando 'useEffect'.
Recibe un array.

Si dejamos un array vacio [] se ejecuta al montarse el componente pero si cambio los contadores 'useEffect' no vuelve a ejecutarse.
Es decir que poniendo un array vacio controlamos que solo se ejecute el 'componentDidMount()'.
No el 'componentDidUpdate()'
Solo el montaje del componente.

useEffect( () => {
    console.log('USE EFFECT')
},[]);

Si necesitamos vigilar alguna dependencia, es decir que si algo cambia se vuelva a ejecutar, eso va dentro de los corchetes [] como dependencia.

useEffect(() => {
    console.log('USE EFFECT')
}, [counter1, counter2]);

De esta forma estara vigilando las funciones que le pase dentro de los corchetes, si esta vigilada al pulsarla se volvera a ejecutar 'useEffect'; sino no.
Lo que NO este dentro de los cortchetes no esta vigilado y al clickearlo no ejecutara 'useEffects'.


Esto es importante para controlar las peticiones HTTP.
Es fundamental controlar el orden de ejecucion de 'useEffect' para no hacer peticiones infinitas.


*/