import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){
    const [username, setUsername] = useState('')

    function handleUsernameInputChange(event){
       const value =  event.target.value
       setUsername(value)
    }

    return (
        <div>
            <form>
                <input name="username" value={username} onChange={handleUsernameInputChange}/>
            </form>
            <Welcome name={username} />
        </div>
    )
}