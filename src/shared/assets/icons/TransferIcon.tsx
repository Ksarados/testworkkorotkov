import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

const TransferIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <G fill='#FE5900' fillRule='evenodd' clipPath='url(#a)' clipRule='evenodd'>
      <Path d='M9 7H8v11h12V7H9Z' opacity={0.2} />
      <Path d='M17 15h-4v-2h4v2Z' />
      <Path d='m5.707 2.572-2.5-2.5-1.414 1.414L4 3.694V18.17A3.001 3.001 0 1 0 7.83 22h11.256l1.707 1.706 1.414-1.414-2-2-.293-.293H7.83a3.008 3.008 0 0 0-1.828-1.829V2.865l-.294-.293Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h24v24H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TransferIcon;
