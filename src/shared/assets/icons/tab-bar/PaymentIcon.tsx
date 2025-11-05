import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PaymentIcon = ({ color, ...props }: SvgProps) => (
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
      d='m13.247 0 1.422 1.423 4.24 4.24.59.59-.59.588-4.24 4.24-1.422 1.423V9.043h-5.22V3.462h5.22V0ZM6.252 7.357 4.83 8.779.59 13.02l-.59.59.59.59 4.24 4.24 1.422 1.422v-3.462h5.219v-5.58H6.252V7.357Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default PaymentIcon;
