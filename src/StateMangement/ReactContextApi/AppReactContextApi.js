import { useContext } from "react"
import Counter from "./Counter"
import { CounterContext } from "./context/Counter"

function AppReactContextApi(){
    const counterState = useContext(CounterContext)
    console.log("Context",counterState)

    return (
        <div className="App">
            <h1>Count is {counterState.count}</h1>
            <Counter></Counter>
            <p>These are different component</p>
            <Counter></Counter>
            <p>These are different component</p>
            <Counter></Counter>
            {/* here we don't use any props or callback function for increment or decrement instead we pass value throught  in CountextContext using useContext */}
        </div>
    )
}

export default AppReactContextApi