import { useState, useEffect } from "react";

export default function TimerHook() {
  const [crono, setCrono] = useState({
    reset: false,
    ciclo: 0,
    work: 25,
    secons: 120,
    counting: false,
    break_short: 0,
    break_long: 0,
  });

  const reset = () => {
    setCrono({ ...crono, secons: 120, reset: !crono.reset });
  };

  const update = () => {
    if (crono.counting) {
      setCrono({ ...crono, secons: --crono.secons });
    }
  };

  const counting = () => {
    setCrono({ ...crono, counting: !crono.counting });
  };

  useEffect(() => {
    console.log("se monta");
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, [crono.reset, crono.counting]);

  return { crono, setCrono, reset, counting };
}
