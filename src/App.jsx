import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App(){
    function handleShowTime(){
        const now = new Date()

        alert(now.toLocaleTimeString())
    }
    return (
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
            <Message/>
            <Age age={24}/>
            <Welcome name="Denise"/>
            <AlertClock onClick={handleShowTime}/>
            <Counter/>
            <MouseClicker/>
        </div>
    )
}