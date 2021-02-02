import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGlobeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 01-7.684-4.988l1.737-.992A8 8 0 1015.97 3.053l.992-1.737A9.996 9.996 0 0122 10c0 5.185-3.947 9.449-9 9.95V21zm-1-4a7 7 0 110-14 7 7 0 010 14z" />
    </Svg>
  );
}

export default SvgGlobeFill;
