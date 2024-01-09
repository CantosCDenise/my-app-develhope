import { Age } from "./Age";

export function Welcome({ name, age = 24 }){
    return <div className="welcome">
        <strong> Welcome, {name}!</strong>
        <Age age={age}/>
        {age > 18 && <Age age={age}/>}
        {age && <Age age={age}/>}
        {age > 18 && age < 65 && <Age age={age}/>}
        {age > 18 && age < 65 && name === "John" && <Age age={age}/>}
        </div>
}