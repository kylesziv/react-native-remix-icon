import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMicroscopeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.196 2.268l3.25 5.63a1 1 0 01-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 01-1.366-.366L8.546 8.215a5.002 5.002 0 00-3.222 6.561A4.976 4.976 0 018 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549A5.038 5.038 0 0112.9 20H21v2l-17 .001A4.979 4.979 0 013 19c0-1.007.298-1.945.81-2.73a7.001 7.001 0 013.717-9.82l-.393-.682a2 2 0 01.732-2.732l2.598-1.5a2 2 0 012.732.732z" />
    </Svg>
  );
}

export default SvgMicroscopeFill;
