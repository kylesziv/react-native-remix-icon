import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTicket2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v5.5a2.5 2.5 0 100 5V20a1 1 0 01-1 1H3a1 1 0 01-1-1v-5.5a2.5 2.5 0 100-5V4a1 1 0 011-1h18zm-1 2H4v2.968l.156.081a4.5 4.5 0 012.34 3.74L6.5 12a4.499 4.499 0 01-2.344 3.95L4 16.032V19h16v-2.969l-.156-.08a4.5 4.5 0 01-2.34-3.74L17.5 12c0-1.704.947-3.187 2.344-3.95L20 7.967V5zm-4 4v6H8V9h8z" />
    </Svg>
  );
}

export default SvgTicket2Line;
