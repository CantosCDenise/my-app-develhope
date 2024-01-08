import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, amount = 1}){
    const [count, setCounter] = useState(initialValue)
    
    function handleCounterIncrement(){
        setCounter((c) => c + amount)
    }
    
    function handleCounterDecrement(){
        setCounter((c) => c - amount)
    }

    function handleCounterReset(){
        setCounter((c) => c = initialValue)
    }
    return (
        <div>
            <CounterDisplay count={count}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}