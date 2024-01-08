import { Age } from "./Age";

export function Welcome({ name, age = 24 }){
    return <div>
        <strong> Welcome, {name}!</strong>
        <p><Age age={age}/></p>
        {age > 18 && <p><Age age={age}/></p>}
        {age && <p><Age age={age}/></p>}
        {age > 18 && age < 65 && <p><Age age={age}/></p>}
        {age > 18 && age < 65 && name === "John" && <p><Age age={age}/></p>}
        </div>
}