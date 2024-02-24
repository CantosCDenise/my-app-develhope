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
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUsers } from "./ShowGithubUsers";


export function App(){
    // function handleShowTime(){
    //     const now = new Date()

    //     alert(now.toLocaleTimeString())
    // }

    return (
        <Routes>
            <Route path="/" element={<div><Welcome name="Denise"/>
                <Link to="/counter">Counter</Link>
                <Link to="users/:username">Github user</Link>
                <Link to="/hello">Hello</Link>
                </div>}/>
            <Route path="/counter" element={<div><Counter/>
                <Link to="/">Go home</Link>
                </div>}/>
            <Route path="users/:username" element={<div><ShowGithubUsers/>
                <Link to="/">Go home</Link>
                </div>}/>
            <Route path="/hello" element={<div><Hello/>
                <Link to="/">Go home</Link>
                </div>}/>
            <Route path="*" element={<div><p>Not Found</p>
                <Link to="/">Go home</Link>
                </div>}/>
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