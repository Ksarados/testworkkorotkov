import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const QRcodeIcon = (props: SvgProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <G clipPath='url(#a)'>
      <Path
        fill='#fff'
        fillRule='evenodd'
        d='M.833.833H7.5V2.5h-5v5H.833V.833Zm3.334 8.334v-5h5v5h-5ZM5.833 7.5H7.5V5.833H5.833V7.5Zm5 1.667v-5h5v5h-5ZM12.5 7.5h1.667V5.833H12.5V7.5ZM4.167 15v.833h5v-5h-5V15Zm3.333-.833H5.833V12.5H7.5v1.667Zm-5.833 5H.833V12.5H2.5v5h5v1.667H1.667ZM19.167.833V7.5H17.5v-5h-5V.833h6.667Zm0 17.5v.834H12.5V17.5h5v-5h1.667v5.833Zm-8.334-7.5v5h5.209v-1.666H12.5v-3.334h-1.667Zm3.334 0V12.5h1.666v-1.667h-1.666Z'
        clipRule='evenodd'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h20v20H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default QRcodeIcon;
