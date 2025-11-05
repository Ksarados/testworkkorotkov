import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeIcon = ({ color, ...props }: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width={20}
    height={20}
    {...props}
  >
    <Path
      fill={color}
      fillRule='evenodd'
      d='M19.25 8.25 9.625 0 0 8.25v10.913h19.25V8.25Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default HomeIcon;
