import React from 'react';

const NumberLine = ({ numbers, selected }) => {
  const easing = 'ease-in-out-back';
  const offset = -1 * selected;

  return (
    <ul className={`numberline offset-${Math.abs(offset)} ${easing}`}>
      {numbers && numbers.map((number, index) => {
        let selectedClassName = (selected === number ? 'selected' : '');
        return (
          <li
            key={index}
            className={`${selectedClassName} ${easing}`}
          >{number}</li>
        )
      })}
    </ul>
  );
};

export default NumberLine;