import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSubwayLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h10a4 4 0 014 4v11a2 2 0 01-2 2h-1.8zM13 5v6h6V7a2 2 0 00-2-2h-4zm-2 0H7a2 2 0 00-2 2v4h6V5zm8 8H5v5h14v-5zM7.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgSubwayLine;
