import { useEffect, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

const Timer = (args: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);

  console.log(args.milisegundos);

  useEffect(() => {
    setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => {
      console.log("destruyendo");
    };
  }, [segundos]);
  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};

export default Timer;
