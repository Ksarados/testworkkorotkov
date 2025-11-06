import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MessageIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      fill='#fff'
      fillRule='evenodd'
      d='M3 17.46h4.891v3.04l3.97-3.04H21V3.5H3v13.96Zm8.078-6.795-1.342-1.27-1.397 1.323L9.68 11.96l1.37 1.322 1.397-1.295 3.187-2.988-1.37-1.322-3.186 2.988Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default MessageIcon;
