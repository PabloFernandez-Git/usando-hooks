import React, { useState, useEffect } from 'react'

const App = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setPost(data)
        }

        getPosts()
    }, [id]);

    const handlePrevId = () => {
        if (id > 1) setId(id - 1)
    }

    const handleNextId = () => {
        setId(id + 1)
    }

    return (
        <>
            {/* <p>{JSON.stringify(post)}</p> */}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handlePrevId}>Prev ID</button>
            <button onClick={handleNextId}>Next ID</button>
            <p>{id}</p>
        </>
    );
}


export default App;


/*
Ejercicio con HTTP, useEffect y useEffect

- Pedir un post a 'JSONPlaceholder' y utilizando dos botones cambiar el numero de post que queremos ver.

1. Creamos un estado que guarde el 'id'
Al no existir el id '0' iniciamos el state en '1'

2. Pedimos el post utilizando 'async await' e interpolamos el 'id' usando template strings.

3. Creamos los dos botones (prev y next) y les pasamos el evento 'onClick' con un 'handle' para manejar el evento.

4. Creamos los 'handle' indicando el comportamiento segun corresponda.

5. useEffect solo se esta ejecutando cuando carga la pagina (cuando se monta el componente).
Tenemos que decirle que se vuelva a ejecutar cuando cambie el 'id'.
Para solucionar esto debemos pasarle esa dependencia a 'useEfect' entre corchetes [id].
De esta forma vigilara 'id' y volvera a cargar la pagina cada vez que cambie.

6. Para corregir el problema de no usar un 'id' menor a 1 tenemos que usar una condicion en nuestro 'handlePrevId'






*/