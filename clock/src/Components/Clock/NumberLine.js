import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import theme from '../../theme/theme';

const offsetSize = '41.8px';

const offsets = {
  '&.offset-0': {
    transform: `translateY(0)`
  },
  '&.offset-1': {
    transform: `translateY(-${offsetSize})`
  },
  '&.offset-2': {
    transform: `translateY(calc(-2 * ${offsetSize}))`
  },
  '&.offset-3': {
    transform: `translateY(calc(-3 * ${offsetSize}))`
  },
  '&.offset-4': {
    transform: `translateY(calc(-4 * ${offsetSize}))`
  },
  '&.offset-5': {
    transform: `translateY(calc(-5 * ${offsetSize}))`
  },
  '&.offset-6': {
    transform: `translateY(calc(-6 * ${offsetSize}))`
  },
  '&.offset-7': {
    transform: `translateY(calc(-7 * ${offsetSize}))`
  },
  '&.offset-8': {
    transform: `translateY(calc(-8 * ${offsetSize}))`
  },
  '&.offset-9': {
    transform: `translateY(calc(-9 * ${offsetSize}))`
  }
};
const Line = styled('ul')(
  {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    // backgroundColor: theme.colors.blue,
    width: "3em",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    borderRadius: theme.radii[3],
    boxShadow: `
     rgba(0, 0, 0, 0.24) 0px 3px 8px inset
    `,
    transition: '0.6s cubic-bezier(0.25, 0.8, 0.25, 1.75)',
    float: 'left',
    marginLeft: '10px',
    marginRight: '10px'
  },
  offsets,
  space,
  width,
  fontSize,
  color
);

const LineItem = styled('li')(
  {
    margin: '0.5rem',
    padding: '0.5rem',
    color: theme.colors.text.blue,
    textAlign: 'center',
    '&.selected': {
      backgroundColor: theme.colors.bg,
      borderRadius: theme.radii[3],
      color: theme.colors.text.light,
      fontSize: '13pt',
      fontWeight: 'bold',
      boxShadow: `
        rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px
      `
    },
    offsets,
  },
  space,
  width,
  fontSize,
  color
);

const NumberLine = ({ numbers, selected }) => {
  return (
    <Line
      // p={}
      bg='teal'
      color='text.light'
      className={`offset-${selected}`}
    >
      {
        numbers && numbers.map(
          (number, index) => {
            const isSelected = selected === number;
            return (
              <LineItem
                bg={isSelected ? 'bg' : ''}
                key={index}
                className={`
                  ${isSelected ? 'selected' : ''}
                `}
              >{number}</LineItem>
            )
          }
        )
      }
    </Line>
  );
};

export default NumberLine;