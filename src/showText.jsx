import { use, useState } from "react";

export default function ShowText() {
    const [text,setText] = useState(0);
    const showText=()=>{
        let newText = "Hi, I am learning React";
        setText(newText);
    }
    const hideText=()=>{
        let newText = "";
        setText(newText);
    }
    return (
        <div className="reseter">
            <button onClick={showText} className="card">Show</button>
            <button onClick={hideText} className="card">Hide</button>
            <h3>{text}</h3>
        </div>
    )
}