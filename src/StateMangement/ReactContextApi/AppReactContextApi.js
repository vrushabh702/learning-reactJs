import { useContext } from "react"
import Counter from "./Counter"
import { CounterContext } from "./context/Counter"

function AppReactContextApi(){
    const counterState = useContext(CounterContext)
    console.log("Context",counterState)

    return (
        <div className="App">
            <h1>Count is 0</h1>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
        </div>
    )
}

export default AppReactContextApi