import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const Box = styled('div')(
  {
    boxSizing: 'border-box',
    pt: '100px',
  },
  space,
  layout,
  color
);

export default Box;