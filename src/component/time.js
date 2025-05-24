/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import './App.css';
import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import './time.css'; // ✅ make sure this matches the file name & location
import  './time.css';

function Time() {
   useEffect(()=>{
    document.title='Mini-Project';
   },[])
    const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  // To make the stopwatch operational, you need to increment the time state every 10 milliseconds when it is running.
  //  This is where useEffect comes in.
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
 <div className='time-container'>
      <h1>Stop - Watch</h1>
      <div className='timer'>
        {/* <button onClick={()=>{setMode(dark)}}>button</button> */}
        {/* <span>{("0" + Math.floor((time / )))}</span> */}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>

        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button className='stop' onClick={() => { setRunning(false) }}>Stop</button>
        ) : (
          <button className='start' onClick={() => { setRunning(true) }}>Start</button>
          // <button className={`btn btn-primary ${styles.myButton}`}>Start</button>
        )
        }
        <button  className='reset' onClick={() => { setTime(0) }} disabled={time === 0} type = "button">Reset</button>
      </div>
    </div>
  )
}

export default Time
