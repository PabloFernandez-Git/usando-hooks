import {useState, useEffect} from 'react'

export const useHttp = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setIsLoading(false)
        }

        getData()
    }, [url]);

    return [data, isLoading]

}

/* export default useHttp; */




/*

Mejorar el 'hook personalizado' implementando un loading


1. Crear en nuestro hook el estado de 'loading'.
Por defecto el estado inicial va a ser 'true' porque cuando llamemos a este hook por defecto ya va a estar cargando.

const [isLoading, setIsLoading] = useState(true)

2. Despues tenemos que saber en que punto tiene que ser 'true' y en que punto tiene que ser 'false'.
Cuando iniciamos la funcion sera 'true' porque es el punto en el cual se va a empezar a cargar la informacion, y una vez que haya terminado de cargar los datos, 'Loading' sera 'false'.

const getData = async () => {
    setIsLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    setIsLoading(false)
}


3. Para poder utilizarlo solo resta devolverlo

return [data, isLoading]


4. En nuestro App.jsx aparte de 'post' ahora tambien tenemos que incorporar 'isLoading'

const [post, isLoading] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)


5. Podemos incorporar (a nuestra aplicacion) esta nueva funcionalidad que muestra cuando esta cargando interpolando codigo JS y diciendole que si esta cargando renderice un <h2> con la leyenda 'Cargando...'

{isLoading && <h2>Loading...</h2>}


6. Tambien podemos desactivar los botones para que no se puedan hacer peticiones cuando esta cargando.

<button disabled={isLoading} onClick={handlePrevId}>Prev ID</button>
<button disabled={isLoading} onClick={handleNextId}>Next ID</button>




*/