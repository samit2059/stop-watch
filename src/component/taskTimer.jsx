import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { BsFillPlayFill, BsPauseFill, BsStopFill} from "react-icons/bs";
document.body.style.backgroundColor="#282c34";
function TaskTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
// End of Time 
const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: 'Happy coding bro'
})
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliSeconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliSeconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliSeconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliSeconds(99);
        }
      }, 10);
    }
 if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds=== 1){
        setShowEndScreen({...showEndScreen, show: true});
        resetTimer();
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

// start , pause , stop
  function startTimer(){
    if(hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds!== 0){
        setIsRunning(true);
        setShowEndScreen({...showEndScreen, show: false});

    }
    else{
        window.alert("add time");
    }
  }
// Pause {}
function pauseTimer(){
    setIsRunning(false);
}

const stopTimer = ()=>{
    resetTimer();
    setShowEndScreen({...showEndScreen, show: true});
}
function resetTimer(){
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliSeconds(0);
}
  // Handlers
  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <div >
        {showEndScreen.show && <h1 className="title text-light">{showEndScreen.message}</h1>}
        <h2 style={{alignItems:'center', justifyContent:'center', marginLeft:'580px', color:'whitesmoke', fontFamily:'sans-serif'}}>Task - Timer</h2>
      <Timer
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeHours={changeHours}
        changeMinutes={changeMinutes}
        changeSeconds={changeSeconds}
      />
      <br />
<div style={{alignItems:'center', marginLeft: '620px'}}>
         {!isRunning && (<button className="btn btn-success btn-lg" onClick={startTimer}>
             <BsFillPlayFill />
         </button>)}
         {isRunning && (<button className="btn btn-warning btn-lg" onClick={pauseTimer}>
                <BsPauseFill />
        </button>)}
            <button className="btn btn-danger btn-lg mx-2" onClick={stopTimer}>
                <BsStopFill />
            </button>
        </div>
    </div>
  );
}

export default TaskTimer;
