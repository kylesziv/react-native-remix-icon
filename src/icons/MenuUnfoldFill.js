import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenuUnfoldFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 18v2H3v-2h18zM17.05 3.55L22 8.5l-4.95 4.95v-9.9zM12 11v2H3v-2h9zm0-7v2H3V4h9z" />
    </Svg>
  );
}

export default SvgMenuUnfoldFill;
