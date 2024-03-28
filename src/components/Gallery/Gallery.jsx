import React, { useState, useEffect } from 'react'

export default function Gallery({prod}) {


    console.log(prod);

    let [name, setName] = useState('ahmed');
    let [count, setCount] = useState(0);


    useEffect(() => {
        console.log('component did Mount');

        return () => {
            console.log('component will unMount');
        }
    }, []);

    useEffect(() => {
        if (count === 0)
            return;
        console.log('component did update count');
    }, [count]);


    useEffect(() => {
        if (name === 'ahmed')
            return;
        console.log('component did update name');
    }, [name]);

    function changeName() {
        setName('ali');
    }

    function changeCount() {
        setCount(Math.random())
    }

    return (
        <div>
            <h2>{name}</h2>
            <h2>{count}</h2>
            <button onClick={changeCount} >change Count</button>
            <button onClick={changeName} >change Name</button>
        </div>
    )
}
