"use client";
import { useState } from "react";
const Counter = () => {
    
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-5'>
            <h2 className='text-2xl font-semibold'>
                This is counter page
            </h2>
            <div>
                <p>Count: {count}</p>
            </div>
            <div className="flex gap-5">
                <button className="btn btn-primary btn-outline"
                onClick={()=> setCount(count+1)}
                >Incremenent</button>
                <button className="btn btn-primary btn-outline"
                onClick={()=> setCount(count-1)}
                >Decremenent</button>
            </div>
        </div>
    );
};

export default Counter;