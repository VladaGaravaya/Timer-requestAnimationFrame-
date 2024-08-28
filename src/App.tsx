import { useState } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';

const App = () => {
  const [timers, setTimers] = useState<number[]>([]);

  const handleAddTimer = () => {
    setTimers([...timers, timers.length + 1]);
  };

  const handleRemoveTimer = () => {
    if (timers.length > 0) {
      setTimers(timers.slice(0, -1));
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleAddTimer}>Add Timer</button>
        <button onClick={handleRemoveTimer} disabled={timers.length === 0}>
          Remove
        </button>
      </div>
      <div className="timers">
        {timers.map((timerId: number) => (
          <Timer key={timerId} />
        ))}
      </div>
    </div>
  );
};

export default App;
