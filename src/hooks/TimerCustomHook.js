import { useState, useEffect } from "react";

export default function TimerHook() {
  const [config, setConfig] = useState({
    work: 25,
    secons: 120,
    break_short: 0,
    break_long: 0,
  });

  const reset = () => {
    setConfig({ ...config, secons: 120, reset: !config.reset });
  };

  const update = () => {
    if (config.counting) {
      setConfig({ ...config, secons: --config.secons });
    }
  };

  const counting = () => {
    setConfig({ ...config, counting: !config.counting });
  };

  useEffect(() => {
    console.log("se monta");
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, [config.reset, config.counting]);

  return { config, setConfig, reset, counting };
}
