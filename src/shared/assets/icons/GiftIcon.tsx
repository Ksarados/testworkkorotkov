import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const GiftIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      fill='#FE5900'
      fillRule='evenodd'
      d='M7 5a2 2 0 1 1 4 0v2.5h2V5a2 2 0 1 1 4 0c0 .226-.18 1.085-1.055 1.668l-1.5 1 1.11 1.664 1.5-1C18.58 7.315 19 5.774 19 5a4 4 0 0 0-7-2.646A4 4 0 0 0 5 5c0 .774.42 2.315 1.945 3.332l1.5 1 1.11-1.664-1.5-1C7.18 6.085 7 5.226 7 5Z'
      clipRule='evenodd'
    />
    <Path
      fill='#FE5900'
      fillRule='evenodd'
      d='M1 7h22v5.5h-1V23H2V12.5H1V7Z'
      clipRule='evenodd'
      opacity={0.2}
    />
    <Path
      fill='#FE5900'
      fillRule='evenodd'
      d='M22 12.5H2v2h9V23h2v-8.5h9v-2Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default GiftIcon;
