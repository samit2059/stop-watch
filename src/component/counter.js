import React, { useEffect, useState } from 'react'
import './counter.css'
function Counter() {
     useEffect(()=>{
        document.title = 'Mini-Project/Counter';
     },[])
    const[count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
     const reset = () =>{
        setCount(0);
     }
  return (
    <div className='container1'>
        <h1>Counter - simple</h1>
        <hr/>
        <div className="main">
            <button type="button" class="btn btn-outline-dark" onClick={decrement}>-</button>
            <p>{count}</p>
           <button type="button" class="btn btn-outline-dark" onClick={increment}>+</button>
           </div>
           <div className="next">
           <button type="reset" class="btn btn-outline-dark p-2 m-2"id='reset' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
