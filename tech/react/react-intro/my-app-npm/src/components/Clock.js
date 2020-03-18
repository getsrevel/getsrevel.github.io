import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return <div>Klokken er: {time}</div>;
}

export default Clock;
