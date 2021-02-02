import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShipLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 10.4V4a1 1 0 011-1h5V1h4v2h5a1 1 0 011 1v6.4l1.086.326a1 1 0 01.682 1.2l-1.516 6.068a4.992 4.992 0 01-1.902-.272l1.25-5.352L12 10l-7.6 2.37 1.25 5.351a4.992 4.992 0 01-1.902.273l-1.516-6.068a1 1 0 01.682-1.2L4 10.4zm2-.6L12 8l6 1.8V5H6v4.8zM4 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0012 20a5.978 5.978 0 004-1.528A5.978 5.978 0 0020 20h2v2h-2a7.963 7.963 0 01-4-1.07A7.963 7.963 0 0112 22a7.963 7.963 0 01-4-1.07A7.963 7.963 0 014 22H2v-2h2z" />
    </Svg>
  );
}

export default SvgShipLine;
