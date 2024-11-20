import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound(){
    // return<Navigate to='/' />
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(()=>{
            navigate('/', {state: "Error not Page"});
        },1000)
    },[])
    return <h1>NotFound</h1>
}
