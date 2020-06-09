import React, { useState } from 'react'

const Form = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="text"
                />
            </div>
            <p>{JSON.stringify(values)}</p>
        </form>
    )
}

export default Form


/*
useState con objetos

1. Creamos una funcion para controlar los valores del formulario.
Como paramentro le pasamos un objeto, este objeto necesita los valores que queremos controlar.

const [values, setValues] = useState({
    name: '',
    email: ''
})


2. Le pasamos el evento 'onChange' con la funcion que lo va a controlar a cada <input>

onChange={handleChange}


3. Trabajando con clases es el propio React el que se encarga de hacer la mezcla entre lo que teniamos y lo que añadimos, esto con los Hooks no sucece.
La forma mas simple de resolver este problema es utilizar el 'spread operator' (...values,).
De esta manera cada campo contiene la informacion correcta.
El 'spread operator' realiza una copia del valor que tiene 'values' y luego añade '[e.target.name]: e.target.value'
De esta forma nunca perdemos los valores que ya teniamos escritos.
Esta es la forma mas simple de hacerlo, pero si tenes un objeto que tiene pocas propiedades, React recomienda hacer un estado para cada propiedad.


const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}



*/