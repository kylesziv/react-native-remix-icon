import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTicket2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v5.5a2.5 2.5 0 100 5V20a1 1 0 01-1 1H3a1 1 0 01-1-1v-5.5a2.5 2.5 0 100-5V4a1 1 0 011-1h18zm-5 6H8v6h8V9z" />
    </Svg>
  );
}

export default SvgTicket2Fill;
