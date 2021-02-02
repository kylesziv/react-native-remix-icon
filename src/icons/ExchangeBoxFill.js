import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExchangeBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9 6H8v2h9l-5-5v3zm-5 4l5 5v-3h4v-2H7z" />
    </Svg>
  );
}

export default SvgExchangeBoxFill;
