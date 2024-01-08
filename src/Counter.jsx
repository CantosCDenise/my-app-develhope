import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, amount = 1}){
    const [count, setCounter] = useState(initialValue)

    const counterRef = useRef(null)

    useEffect(() => {
        console.log(count)
        console.log(counterRef.current)
    }, [count])
    
    function handleCounterIncrement(){
        counterRef.current = "up"
        setCounter((c) => c + amount)
    }
    
    function handleCounterDecrement(){
        counterRef.current = "down"
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