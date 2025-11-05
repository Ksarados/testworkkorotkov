import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HistoryIcon = ({ color, ...props }: SvgProps) => (
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
      d='M9.165 0A9.164 9.164 0 0 0 0 9.167a9.168 9.168 0 0 0 9.165 9.166 9.164 9.164 0 0 0 9.165-9.166A9.167 9.167 0 0 0 9.165 0Zm-.833 4.167V10h4.166V8.333h-2.5V4.167H8.332Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default HistoryIcon;
