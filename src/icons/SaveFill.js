import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSaveFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 21v-8H6v8H4a1 1 0 01-1-1V4a1 1 0 011-1h13l4 4v13a1 1 0 01-1 1h-2zm-2 0H8v-6h8v6z" />
    </Svg>
  );
}

export default SvgSaveFill;
