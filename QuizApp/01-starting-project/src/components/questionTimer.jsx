import { useEffect, useState } from "react";

export default function QuestionTimer ({onTimeOut, timeOut ,mode}){
const [remainingTime, setRemainingTime]=useState(timeOut);
useEffect(()=> {

const timer= setTimeout(() => {
    onTimeOut()
}, timeOut)
return ()=> {
    clearTimeout(timer);
}

},[timeOut,onTimeOut]);

useEffect( ()=> {
    
const interval = setInterval(() => {
    setRemainingTime(prevRemainingTime=> prevRemainingTime-100)
}, 100)
return ()=> {
    clearInterval(interval)
}

},[]);
    return <progress id="progress" value={remainingTime} max={timeOut} className={mode} />
}