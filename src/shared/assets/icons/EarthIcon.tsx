import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const EarthIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <G fill='#FE5900' clipPath='url(#a)'>
      <Path
        d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z'
        opacity={0.2}
      />
      <Path
        fillRule='evenodd'
        d='M12.304 12.736 15 15.48v8.142c5.176-1.332 9-6.03 9-11.622 0-2.612-.835-5.03-2.252-7h-6.2a4.548 4.548 0 0 0-3.244 7.736ZM.166 14H6a4 4 0 0 1 4 4v5.834A12.01 12.01 0 0 1 .166 14Z'
        clipRule='evenodd'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h24v24H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EarthIcon;
