import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showTime, setShowTime] = useState(true);
  useEffect(() => {
    if (!showTime) return;
    let interval = setInterval(() => {
      console.log("Hi");
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [showTime]);
  return (
    <>
      {showTime && <h1>Time is {time}</h1>}
      <button
        onClick={() => setShowTime(!showTime)}
    
        style={{ backgroundColor: showTime ? "pink" : "brown", padding: "14px" }}
      >
        {showTime ? "Hide" : "Show"}
      </button>
    </>
  );
}
