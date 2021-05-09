import React from 'react';

const NumberLine = ({ numbers, selected }) => {
  return (
    <ul className="numberline">
      {numbers && numbers.map((number, index) => {
        return (
          <li
            key={index}
            className={selected === number ? 'selected' : ''}
          >{number}</li>
        )
      })}
    </ul>
  );
};

export default NumberLine;