import { useState } from "react"

export function List(){
    const [list, setList] = useState(
        ["red"]
    )
    const [item, setItem] = useState("")

    function handleInput(event){
        setItem(event.target.value)
    }
    function handleButtonAdd(){
        setList((prepState)=> [...prepState, item])
    }

    return(
        <div>
            <input type="text" onChange={handleInput}/>
            <button type="button" onClick={handleButtonAdd}>Add</button>
            <ul>
                {list.map((item)=> <li>{item}</li>)}
            </ul>
        </div>
    )
}