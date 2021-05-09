import React, { useState, useEffect } from 'react';
import './Clock.css';
import NumberLine from './NumberLine';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState([0, 0]);
  const [minutes, setMinutes] = useState([0, 0]);
  const [hours, setHours] = useState([0, 0]);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [secondsRight, setSecondsRight] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
  }

  const harold = standIn => {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn.toString();
  }

  const getSplitTimeArray = time => {
    let split = time.toString().split('');
    if (split.length > 1) {
      return split;
    } else {
      split.unshift('0');
    }
  }

  useEffect(() => {
    let timeout = null;
    if (isActive) {
      timeout = setTimeout(() => {
        const _time = new Date();
        setTime(_time);
        // console.log(_time);

        const _hours = _time.getHours();
        const _minutes = _time.getMinutes();
        const _seconds = _time.getSeconds();
        // console.log(`${harold(_hours)}:${harold(_minutes)}:${harold(_seconds)}`);

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
    } else if (!isActive) {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [isActive, time]);

  return (
    <>

      <div>
        <button style={{ display: isActive ? 'none' : '' }} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2]} selected={hours[0]} />
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={hours[1]} />
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2, 3, 4, 5]} selected={minutes[0]} />
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={minutes[1]} />
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2, 3, 4, 5]} selected={seconds[0]} />
      </div>
      <div className="list">
        <NumberLine numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} selected={seconds[1]} />
      </div>

      <br style={{clear:"both"}} />
    </>
  );
};

export default Clock;