import { useState } from "react"

export default function Reseter() {
    const [value, setValue] = useState(0);
    const handleAdd = () => {
        const addedValue = value + 1;
        setValue(addedValue);
    }
    const handleSubstract = () => {
        const substractValue = value - 1;
        setValue(substractValue);
    }
    const makeZero = ()=>{
        const reset = value-value;
        setValue(reset);
    }
    return (
        <div className="reseter">
            <h3>Current Number:{value}</h3>
            <br />
            <button onClick={handleAdd} className="card">Add</button>
            <button onClick={handleSubstract} className="card">Substract</button>
            <button onClick={makeZero} className="card">Reset</button>
        </div>
    )
}