import { useState } from "react"

export default function Counter(){
    
    const [count, stateCount] = useState(0);
    const [boundary, stateboundary] = useState(0);
    const [Overboundary, stateOverboundary] = useState(0);
    const CounterSingles = () => {

        const newCount = count+1;
        stateCount(newCount);
    }

    const CounterBoundaries = () => {
        const newCount = count+4;
        stateCount(newCount);

        const cntBdry = boundary+1;
        stateboundary(cntBdry);
        
    }
    const CounterOverBoundaries = () => {
        const newCount = count+6;
        stateCount(newCount);
        const cntoverBdry = Overboundary+1;
        stateOverboundary(cntoverBdry);
    }

    return(
        <div>
            <h2>Score:{count}</h2>
            <button onClick={CounterSingles}>Singles</button>
            <button onClick={CounterBoundaries}>Boundary</button>
            <button onClick={CounterOverBoundaries}>Over Boundary</button>
            <h2>Boundary:{boundary}</h2>
            <h2>Over Boundary:{Overboundary}</h2>

        </div>
    )
}

