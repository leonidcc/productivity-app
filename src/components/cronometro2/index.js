import React, { useState, useEffect } from "react";

export default function Cron2() {
  const [crono, setCrono] = useState({
    reset: false,
    ciclo: 3,
    work: 25,
    secons: 60,
  });

  useEffect(() => {
    console.log("se monta");
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, [crono.reset]);

  const reset = () => {
    setCrono({ ...crono, secons: 60, reset: !crono.reset });
  };

  const update = () => {
      if(crono.secons > 55)
        setCrono({ ...crono, secons: --crono.secons });
      };

  return (
    <div>
      <p className="text-white">
        {crono.ciclo}c - {crono.work}m - {crono.secons}s
      </p>
      <button onClick={reset} type="button" name="button">
        reset
      </button>
    </div>
  );
}
