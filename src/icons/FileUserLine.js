import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileUserLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zm9 8.508a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM7.527 17a4.5 4.5 0 018.946 0H7.527z" />
    </Svg>
  );
}

export default SvgFileUserLine;
