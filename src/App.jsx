import React, { useState, useEffect } from 'react'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setPosts(data)
    }

    getPosts()
  }, []);

  return (
    <>
      <p>{JSON.stringify(posts)}</p>
    </>
  );
}


export default App;

/*
Peticiones HTTP

Como realizar peticiones a una API de forma segura utilizando 'useEffect' ?
(usaremos JSONPlaceholder como ejemplo)

1. La forma mas simple de hacerlo es utilizar 'async await' 

Una vez que tenemos en 'data' la informacion que queremos, usamos 'setPosts' y le pasamos esa informacion.

Para utilizar 'await' siempre debemos hacerlo dentro de una funcion asincrona.

No podemos modificar el comportamiento de 'useEffect' por naturaleza.
La forma de hacerlo es crear dentro de 'useEffect' una funcion utilizando 'const' y esto sera igual a una funcion asincrona.
Dentro de esta es donde construimos nuestra peticion.

Una vez contruida para que se ejecute debemos llamarla.

De esta forma nos llegara toda al informacion que requerimos, pero esto presentara un error de red, ya que realizara pedidos en forma infinita.

Para solucionar esto tenemos que sumarle (a nuestro 'useEffect') un array vacio (sin dependencias) para que haga una unica peticion.

De esta forma solo se ejecutara cuando monte el componente, no cuando se actualice.



*/