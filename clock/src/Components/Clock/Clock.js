import React, { useState, useEffect } from 'react';
// import '../Easings.css';
// import './Clock.css';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import theme from '../../theme/theme';
import NumberLine from './NumberLine';
import TimeDivider from './TimeDivider';

const StyledClock = styled('div')(
  {
    width: 'calc((5em * 6) + (10px * 12) + (10px * 2.5 * 2))',
    margin: '0 auto',
    paddingTop: '300px',
    mb: '-300px'
  },
  space,
  width,
  fontSize,
  color
);

const Clock = () => {
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
    <StyledClock>
      <NumberLine
        numbers={[0, 1, 2]}
        selected={hours[0]}
        variant="hours"
      />
      <NumberLine
        numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        selected={hours[1]}
        variant="hours"
      />
      <TimeDivider />
      <NumberLine
        numbers={[0, 1, 2, 3, 4, 5]}
        selected={minutes[0]}
        variant="minutes"
      />
      <NumberLine
        numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        selected={minutes[1]}
        variant="minutes"
      />
      <TimeDivider />
      <NumberLine
        numbers={[0, 1, 2, 3, 4, 5]}
        selected={seconds[0]}
        variant="seconds"
      />
      <NumberLine
        numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        selected={seconds[1]}
        variant="seconds"
      />

      <br style={{clear:"both"}} />
    </StyledClock>
  );
};

export default Clock;