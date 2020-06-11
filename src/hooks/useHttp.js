import {useState, useEffect} from 'react'

export const useHttp = (url) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        }

        getData()
    }, [url]);

    return [data]

}

/* export default useHttp; */




/*
Hooks personalizados

Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.

Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks.

A diferencia de un componente de React, un Hook personalizado no necesita tener una firma específica. Podemos decidir lo que adopta como argumentos y que, si lo hace, debería devolver. En otras palabras, es como una función normal. Su nombre debería siempre empezar con use así se puede decir que de un vistazo las reglas de Hooks se le aplican.

Nos permite reutilizar codigo de una forma mas simple.

El nombre que le demos a nuestro hook no es relevante pero si es importante que sea identificativo.

Los 'hooks' siempre deben empezar con 'use'.
En el caso de un archivo no es obligatorio, podriamos llamarlo como quisieramos, pero si los llamamos igual que nuestro 'hook' nos va a ayudar a identificarlo.


¿Es este código equivalente a los ejemplos originales? Sí, funciona exactamente de la misma forma. Si miras de cerca, notarás que no hicimos cambios en el comportamiento. Todo lo que hicimos fue extraer código común entre dos funciones en una función separada. Los Hooks personalizados son una convención que surge naturalmente del diseño de los Hooks, en lugar de una característica de React.

¿Tengo que nombrar mis Hooks personalizados comenzando con ”use“? Por favor, hazlo. Esta convención es muy importante. Sin esta, no podríamos comprobar automáticamente violaciones de las reglas de los Hooks porque no podríamos decir si una cierta función contiene llamados a Hooks dentro de la misma.

¿Dos componentes usando el mismo Hook comparten estado? No. Los Hooks personalizados son un mecanismo para reutilizar lógica de estado (como configurar una suscripción y recordar el valor actual), pero cada vez que usas un Hook personalizado, todo estado y efecto dentro de este son aislados completamente.

--------------------------

Construccion de nuestro primer hook personalizado:


1. Creamos una carpeta 'hooks' en 'src' y dentro de esta nuestro primer hook llamado 'useHttp.js'

2. Realizar las importaciones.
Como va a ser un hook que va a hacer peticiones necesitaremos 'useState' y 'useEffect'

3. Un hook se crea exactamente igual que una funcion o un componente.
En el nombre del 'hook' si es obligatorio que comience con 'use' para que React sepa que estamos escribiendo un hook.

4. Extraemos la logica que teniamos y modificamos sus variables para hacerlo reutilizable en todos los casos posibles.
Usamos nombres genericos como 'data' para poder aplicarlo a diferentes usos.
La 'url' sera pasada como parametro; esta sera asignada en el componente donde vayamos a utilizar el 'hook'.

5. Al ser una funcion no olvidar el 'return'
Podemos devolverlo como 'return data' pero se recomienda devolverlo de la siguiente forma:

'return [data]'

Devolviendolo como un array lo podremos utilizar como estamos acostumbrados en los hooks, porque vamos a saber que la posicion cero va a ser data.

6. Exportar el hook (como cualquier otro componente que ya utilizamos anteriormente).

7. Importar el hook donde lo queramos usar (en este caso sera en App.jsx)

8. Para utilizar el hook lo hacemos mediante setState (const [post, setPost]) pasandole el hook y la url que queremos que use.
Podemos nombrarlo de la forma que queremos, no presentara errores.

const [post, setPost] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)


9. Para que la aplicacion funcione necesitamos que se recargue la pagina, que se actualice ante cada cambo de id.
Para que esto suceda debemos indicar en nuestro hook que vigile los cambios [].
El cambio que tenemos que vigilar es ['url'], y de esta forma, cada vez que la 'url' cambie porque nosotros hemos cambiado el 'id' se realizara una nueva peticion.


Resumen
Esta aplicacion no tiene diferencia con la que teniamos antes sin usar hooks personalizados.
La unica diferencia es que si tenemos mas componentes que necesitan hacer peticiones, solo tenemos que importar el 'useHttp' y aqui en este punto pondremos los nombres que nos hagan falta (post, user, data, etc).

const [post, setPost] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)



--------------------------

Exportar/importar

Si exportamos un archivo utilizando 'export' al inicio del componente, clase o funcion que tengamos de la siguiente manera:

export const useHttp = (url) => {...}

Luego podremos importarlo en otro archivo y destructurarlo de la siguiente manera:

import {useHttp} from './hooks/useHttp'

Si lo exportamos de la forma tradicional, a la hora de importarlo no podriamos destructurarlo:

export default useHttp;


*/