import { useState } from "react";
export default function BatsMan() {
    const [runs, setRuns] = useState(0);
    const [sixes,setSixes] = useState(0);
    const handleSingle = () => {
        let updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        let updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        let updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangla BatsMan</h3>
            <p>Score:{runs} </p>
            <p>Sixes:{sixes}</p>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}