import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgInboxArchiveFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 3h16l2 4v13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z" />
    </Svg>
  );
}

export default SvgInboxArchiveFill;
