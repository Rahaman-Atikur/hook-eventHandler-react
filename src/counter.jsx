import { useState } from "react";
 export default function Counter (){
    const[count,setCount] = useState(0);
    const handleAdd = ()=>{
        let newState = count + 1
        setCount(newState);
    }
    const counterStyle={
        border:'2px solid yellow'
    }
    return (
        <div style={counterStyle}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}