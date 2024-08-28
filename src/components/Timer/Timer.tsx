import { useTimer } from './Timer.hooks';
import './Timer.css';

const Timer = () => {
  const { time, startTimer, resetTimer } = useTimer();

  return (
    <div className="timerContainer">
      <h3 className="timerTitle">
        {String(time.min).padStart(2, '0')}:{String(time.sec).padStart(2, '0')}.
        {String(time.mSec).padStart(3, '0')}
      </h3>
      <button onClick={startTimer}>Start / Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
