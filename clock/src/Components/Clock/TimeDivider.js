import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import theme from '../../theme/theme';

const StyledTimeDivider = styled('div')(
  {
    float: 'left',
  },
  space, width, fontSize, color
);

const TimeDivider = () => {
  return (
    <StyledTimeDivider
      width={'calc(5px * 7.5)'}

    >
      {/* : */}&nbsp;
    </StyledTimeDivider>
  );
};

export default TimeDivider;