import React, { useState, useEffect } from 'react'

const App = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        //componentDidMount
        console.log('MOUNTED')
        //componentDidUpdate
        const time = setInterval(() => setDate(new Date().toLocaleTimeString()), 1000)
        //componentWillUnmount
        return () => {
            clearInterval(time)
        }
    })

    return (
        <h1>{date}</h1>
    );
}


export default App;


/*
useEffect

Es el segundo hook mas usado en React.
Se usa para emular el ciclo de vida que teniamos en las clases (component­Did­Mount, component­Did­Update y component­Will­Unmount)
Es una funcion.


1. Debemos importarlo como cualquier dependencia, componente o funcion para utilizarlo.


2. Reemplazando a "componentDidUpdate"
Utilizamos la funcion 'setDate' que tenemos para asignar/actualizar el estado de 'date'.
Creamos un 'setInterval' para poder actualizar el estado cada 'x' periodo de tiempo.
Usando una arrow function le pasamos el 'setDate' y utilizamos dos paramentros (primero el método 'new Date().toLocaleTimeString()' y segundo el intervalo).


3. Reemplazando a "componentWillUnmount"

En el punto anterior estamos creando un intervalo cada vez que montamos el componente; naturalmente esto es incorrecto y va a traer errores. 
Para evitar que eso pase tenemos que desmontar el componente e indicar que limpie el intervalo.

La emulacion del "componentWillUnmount" viene a traves de un 'return' y lo que devolvemos es una funcion.
Dentro de esta funcion vamos a indicar lo que queremos que pase cuando el componente se desmonte. 


return () => {
    clearInterval(time)
}



*/