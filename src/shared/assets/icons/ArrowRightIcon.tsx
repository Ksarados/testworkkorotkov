import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={12}
    fill='none'
    {...props}
  >
    <G clipPath='url(#a)'>
      <Path stroke='#fff' strokeWidth={1.5} d='m1 3 4 4-4 4' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h6v14H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
