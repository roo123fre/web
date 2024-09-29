import { useState } from "react";
import css from "./style.module.css"

const Counter=()=>{
    const [state,setState]=useState(0);
    
    const increment=()=>{
        setState(state+1)
        console.log("state", state)
    }

    const decrement=()=>{
        setState(state-1)
        console.log("state",state)
    }
    return (
        <div className={css.wrapper}>
            <h2>Counter</h2>
            <button onClick={increment}>+</button>
            <span>{state}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;