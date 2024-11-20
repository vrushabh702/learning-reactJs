import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";


export function BookLayout(){
    const [searchParams,setSearchParams] = useSearchParams({n: 3})
    console.log(searchParams)
    const number = searchParams.get('n');
    // const [number,setNumber] = useState(3)
    return(
        <>
            <Link to="/books/1">Book 1</Link>
            <br></br>
            <Link to="/books/2">Book 2</Link>
            <br></br>
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br></br>
            <Link to="/books/new">New Book</Link>
            <br></br>
            <Outlet context={{hello : "world"}} />
            <input
                type="number"
                value={number}
                // onChange={e => setNumber(e.target.value)}
                onChange={e => setSearchParams({n: e.target.value})}
            />
        </>
    )
}