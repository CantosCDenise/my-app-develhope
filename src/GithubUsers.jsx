import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers(){
    const [list, setList] = useState([])
    const [user, setUser] = useState("")
    
    function handleInput(event){
        setUser(event.target.value)
    }
    function handleOnSubmit(event){
        event.preventDefault();
        console.log(user)
        setList((prevState) => [...prevState, user])
    }
    return (
    <div>
        <h1>Data Fetching with fetch and useEffect - 2</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleInput}></input>
            <button>Submit</button>
        </form>
        <ul>
            {list.map((user) => <li><GithubUser username={user}/></li>)}
        </ul>
        
    </div>
    )
}