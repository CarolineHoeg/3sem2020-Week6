import React, { useState, useEffect } from "react";
import "./App.css";

function Clock() {
    var [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <h1>The time is: {time}</h1>;
}

export default Clock;