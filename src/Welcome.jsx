import { Age } from "./Age";

export function Welcome({ name }){
    return <div>
        <strong> Welcome, {name}!</strong>
        <p>{Age}</p>
        </div>
}