import { useState } from "react"

function createData(){
    return {
        username: '',
        password:'',
        remember: false,
    }
}

export function Login (){
    const [data, setData] = useState(createData())

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData(d => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function handleResetForm(){
        setData(createData())
    }


    return (
        <form>
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" value={data.password} type="password" onChange={handleInputChange}/>
            <input name="remember" checked={data.remember} type="checkbox" onChange={handleInputChange} />
            <button name="login" disabled={!data.username || !data.password} >Login</button>
            <button onClick={handleResetForm}>Reset</button>
        </form>
    )
}