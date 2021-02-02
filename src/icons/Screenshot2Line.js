import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgScreenshot2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm0 4h2v2h-2V7zM3 19h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3V7zm7.667 4l1.036-1.555A1 1 0 0112.535 9h2.93a1 1 0 01.832.445L17.333 11H20a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1v-8a1 1 0 011-1h2.667zM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9v6zm5-1a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgScreenshot2Line;
