import React, { useEffect } from "react";
import { useState } from "react"
import { useCounterStore } from "./store";

const setCount = () =>{
    // const count  = useCounterStore.getState().count;
    useCounterStore.setState({count: 1})
}

const AppZustand = () =>{
    // const [count] = useState(0);
    const count = useCounterStore((state)=>state.count)

    return <OtherComponent count={count}/>
}

const OtherComponent = ({count} : {count:number}) =>{
    const increment = useCounterStore((state) => state.increment)
    const incrementAsync = useCounterStore((state) => state.incrementAsync)
    const decrement = useCounterStore((state) => state.decrement)
    const decrementAsync = useCounterStore((state) => state.decrementAsync)

    useEffect(()=>{
        setCount()
    },[])

    return <div>{count}
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        <br></br>
        <div>
            <button onClick={incrementAsync}>IncrementAsync</button>
            <button onClick={decrementAsync}>DecrementAsync</button>
        </div>
    </div>
    
}

export default AppZustand;