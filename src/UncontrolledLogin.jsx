export function UncontrolledLogin(){
    function handleFormSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on' ? true : false,
        }

        console.log(data)
    }

    return(
        <form onSubmit={handleFormSubmit} >
            <h1>Uncontrolled Form</h1>
            <input name="username" />
            <input name="password" type="password" />
            <input name="remember" type="checkbox" />
            <button>Login</button>
            <button type="reset" >Reset</button>
        </form>
    )
}