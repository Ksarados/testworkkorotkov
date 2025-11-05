import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowRightIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={10}
    fill='none'
    {...props}
  >
    <Path stroke='#fff' strokeWidth={1.5} d='m.53.53 4 4-4 4' />
  </Svg>
);
export default ArrowRightIcon;
