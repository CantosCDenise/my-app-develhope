import { Clock } from "./Clock";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Age } from "./Age";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocusableInput } from "./FocusableInput";
import { MountedRef } from "./MountedRef";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { List } from "./Checkpoint_22012024/List";


export function App(){
    function handleShowTime(){
        const now = new Date()

        alert(now.toLocaleTimeString())
    }
    return (
        // <Container title="My application">
        //     <Hello/>
        //     <Hello/>
        //     <Hello/>
        //     <Message/>
        //     <Welcome name="Denise"/>
        //     <AlertClock onClick={handleShowTime}/>
        //     <Counter/>
        //     <MouseClicker/>
        //     <Clock/>
        //     <InteractiveWelcome/>
        //     <Login/>
        //     <UncontrolledLogin/>
        //     <FocusableInput/>
        //     <MountedRef/>
        //     <Colors items={[
        //         {id: 1,
        //         name: "red"},
        //         {id: 2,
        //         name: "orange"},
        //         {id: 3,
        //         name: "yellow"},
        //     ]} />
        // </Container>
        <List/>
        
    )
}