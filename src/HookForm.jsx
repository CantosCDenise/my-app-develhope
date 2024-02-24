//Create a custom hook that keeps track of the state of a 
// controlled form with the username and password inputs, and 
// returns the current value of the inputs as well as an event 
// handler to update either input.

function HookForm(){
    const {username, password} = useForm()

    function handleGetUser(){
        
    }

return(
    <div>
        {username && <h1>{username}</h1>}
    </div>
)
}