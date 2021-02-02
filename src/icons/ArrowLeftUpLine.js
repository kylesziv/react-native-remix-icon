import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeftUpLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.414 8l8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z" />
    </Svg>
  );
}

export default SvgArrowLeftUpLine;
