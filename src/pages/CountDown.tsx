import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("October 30, 2023 17:00:00").getTime();

    const updateCountDown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const timer = setInterval(updateCountDown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="card w-full max-w-[1143px] mx-auto bg-white shadow-xl px-6 py-10 md:py-16 lg:py-20">
      <div className="text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="countdown-item">
              <span className="countdown font-mono text-black xs:text-xl sm:text-4xl md:text-6xl lg:text-7xl">{days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown font-mono text-black xs:text-xl sm:text-4xl md:text-6xl lg:text-7xl">{hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown font-mono text-black xs:text-xl sm:text-4xl md:text-6xl lg:text-7xl">{minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown font-mono text-black xs:text-xl sm:text-4xl md:text-6xl lg:text-7xl">{seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
