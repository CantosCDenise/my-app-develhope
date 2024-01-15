import { Color } from "./Color";

export function Colors({items}){
    return (
        <ul>
            {items.map((item) =>(
                <Color color={item}/>
            ))}
        </ul>
    )
}