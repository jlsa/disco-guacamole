import React, { useState, useEffect } from 'react';
import '../Easings.css';
import './Clock.css';
import NumberLine from './NumberLine';
import TimeDivider from './TimeDivider';

const Clock = () => {
  const [theme, setTheme] = useState('dark');
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState([0, 0]);
  const [minutes, setMinutes] = useState([0, 0]);
  const [hours, setHours] = useState([0, 0]);

  const harold = (standIn) => {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn.toString();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const _time = new Date();
      setTime(_time);

      const _hours = _time.getHours();
      const _minutes = _time.getMinutes();
      const _seconds = _time.getSeconds();

      setSeconds([
        parseInt(harold(_seconds).split('')[0]),
        parseInt(harold(_seconds).split('')[1]),
      ]);

      setMinutes([
        parseInt(harold(_minutes).split('')[0]),
        parseInt(harold(_minutes).split('')[1])
      ]);

      setHours([
        parseInt(harold(_hours).split('')[0]),
        parseInt(harold(_hours).split('')[1])
      ]);
    }, 1000 - time.getMilliseconds());

    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <div className={`clock theme-${theme}`}>
      <NumberLine numbers={[0, 1, 2]} selected={hours[0]}  />
      <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={hours[1]} />
      <TimeDivider />
      <NumberLine numbers={[0, 1, 2, 3, 4, 5]} selected={minutes[0]} />
      <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={minutes[1]} />
      <TimeDivider />
      <NumberLine numbers={[0, 1, 2, 3, 4, 5]} selected={seconds[0]} />
      <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={seconds[1]} />

      <br style={{clear:"both"}} />
    </div>
  );
};

export default Clock;