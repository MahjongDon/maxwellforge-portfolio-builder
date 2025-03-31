
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  initialDuration?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ 
  initialDuration = { days: 1, hours: 5, minutes: 20, seconds: 0 },
  className 
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialDuration);
  const [startTime] = useState<number>(Date.now());
  const [totalSeconds] = useState<number>(
    initialDuration.days * 86400 + 
    initialDuration.hours * 3600 + 
    initialDuration.minutes * 60 + 
    initialDuration.seconds
  );

  useEffect(() => {
    const calculateTimeLeft = () => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);
      
      if (remainingSeconds > 0) {
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [startTime, totalSeconds]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-revup-dark-gray border border-revup-red/20 rounded-md px-4 py-2 md:px-6 md:py-4 backdrop-blur-sm">
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-revup-gray mt-2">{label}</span>
    </div>
  );

  return (
    <div className={cn("flex justify-center items-center gap-2 md:gap-4", className)}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-xl md:text-3xl text-revup-red font-bold">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
