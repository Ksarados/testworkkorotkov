import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MastercardIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={26}
    height={16}
    fill='none'
    {...props}
  >
    <Path
      fill='#fff'
      d='M8 0c1.892 0 3.63.658 5 1.757A7.983 7.983 0 0 0 10 8a7.983 7.983 0 0 0 3 6.242A8 8 0 1 1 8 0Zm10 0a8 8 0 1 1-5 14.242A7.983 7.983 0 0 0 16 8a7.983 7.983 0 0 0-3-6.243A7.964 7.964 0 0 1 18 0Z'
      opacity={0.6}
    />
  </Svg>
);
export default MastercardIcon;
