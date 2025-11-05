import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChatIcon = ({ color, ...props }: SvgProps) => (
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
      d='M10 0a10 10 0 0 0-8.967 14.427l-.88 5.414 5.452-.859c.789.386 1.628.668 2.494.836A8.333 8.333 0 1 1 19.818 8.099 10 10 0 0 0 10 0Zm8.047 8.62a6.667 6.667 0 1 0-1.783 10.702l3.633.572-.586-3.61a6.665 6.665 0 0 0-1.264-7.665Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default ChatIcon;
