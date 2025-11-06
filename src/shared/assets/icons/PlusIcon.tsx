import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PlusIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <Path stroke='#fff' strokeWidth={1.5} d='M8.25 1v14M15 7.75H1' />
  </Svg>
);
export default PlusIcon;
