export default function ShowText() {
    const [text,setText] = useState(0);
    const showText=()=>{

    }
    const hideText=()=>{
        text="";

    }
    return (
        <div className="reseter">
            <button onClick={showText} className="card">Show</button>
            <button onClick={hideText} className="card">Hide</button>
            <h3>{text}</h3>

        </div>
    )
}