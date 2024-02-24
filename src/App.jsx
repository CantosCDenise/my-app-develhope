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
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { useCounter } from "./useCounter";
import { HookCounter } from "./HookCounter";
import { Route, Routes } from "react-router-dom";


export function App(){
    // function handleShowTime(){
    //     const now = new Date()

    //     alert(now.toLocaleTimeString())
    // }


    return (
        <Routes>
            <Route path="/" element={<Welcome name="Denise"/>}/>
            <Route path="/counter" element={<Counter/>}/>
        </Routes>
        //  <Container title="My application">
        //     {/* <GithubUser username="CantosCDenise"/> */}
        //     <GithubUsers/>
        //      <Hello/>
        //      <Hello/>
        //      <Hello/>
        //      <Message/>
        //      <Welcome name="Denise"/>
        //      <AlertClock onClick={handleShowTime}/>
        //      <Counter/>
        //      <MouseClicker/>
        //      <Clock/>
        //      <InteractiveWelcome/>
        //      <Login/>
        //      <UncontrolledLogin/>
        //      <FocusableInput/>
        //      <MountedRef/>
        //      <Colors items={[
        //          {id: 1,
        //          name: "red"},
        //          {id: 2,
        //          name: "orange"},
        //          {id: 3,
        //          name: "yellow"},
        //      ]} />
        //      <List/>
        //      <HookCounter/>

             
        //  </Container>        


    )
}