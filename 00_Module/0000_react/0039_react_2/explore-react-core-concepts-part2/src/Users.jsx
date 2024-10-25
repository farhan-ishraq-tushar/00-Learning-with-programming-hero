import { useEffect, useState } from "react"

export default function Users(){

    // calling an empty array for holding data
    const [users, setUsers] = useState([]);
    
    // "useEffect()" is an another hook is React. It takes two parameter namely "call back function" and "dependency".
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []) //here [] is an empty array and function inside {} is a callback function.   

    return (
        <div>
            <h3>Users: {users.length}</h3>
            
        </div>
    )
}


/**
 * 1. declare a state to hold the data 
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
*/