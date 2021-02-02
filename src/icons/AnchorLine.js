import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAnchorLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.05 11H7v2H4.062A8.004 8.004 0 0011 19.938V9.874A4.002 4.002 0 0112 2a4 4 0 011 7.874v10.064A8.004 8.004 0 0019.938 13H17v-2h4.95c.033.329.05.663.05 1 0 5.523-4.477 10-10 10S2 17.523 2 12c0-.337.017-.671.05-1zM12 8a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgAnchorLine;
