import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFoggyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M1.584 13.007a8 8 0 0114.873-5.908 5.5 5.5 0 016.52 5.908H1.584zM4 19h17v2H4v-2zm-2-4h21v2H2v-2z" />
    </Svg>
  );
}

export default SvgFoggyFill;
