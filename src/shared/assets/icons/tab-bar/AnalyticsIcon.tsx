import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AnalyticsIcon = ({ color, ...props }: SvgProps) => (
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
      d='M10.789 0h.833a8.325 8.325 0 0 1 8.325 8.325v.833h-9.158V0ZM0 11.622a8.325 8.325 0 0 1 8.325-8.325h.833v7.492h7.492v.833a8.325 8.325 0 1 1-16.65 0Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default AnalyticsIcon;
