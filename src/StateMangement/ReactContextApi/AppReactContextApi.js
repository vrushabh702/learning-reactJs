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
            {/* here we don't use any props or callback function for increment or decrement instead we pass value throught  in CountextContext using useContext */}
        </div>
    )
}

export default AppReactContextApi