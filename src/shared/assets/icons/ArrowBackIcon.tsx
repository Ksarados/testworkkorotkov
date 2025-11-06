import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowBackIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path stroke='#fff' strokeWidth={2} d='m15 6-6 6 6 6' />
  </Svg>
);
export default ArrowBackIcon;
