import React from 'react';

const NumberLine = ({ numbers, selected }) => {
  console.log(numbers, selected);
  const offset = -1 * selected;
  return (
    <ul className={`numberline offset-${Math.abs(offset)}`}>
      {numbers && numbers.map((number, index) => {
        return (
          <li
            key={index}
            className={`${selected === number ? 'selected' : ''}`}
          >{number}</li>
        )
      })}
    </ul>
  );
};

export default NumberLine;