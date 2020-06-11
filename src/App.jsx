import React, { useState, useEffect } from 'react'

import {useHttp} from './hooks/useHttp'


const App = () => {

    const [id, setId] = useState(1)
    const [post, setPost] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)

    
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

