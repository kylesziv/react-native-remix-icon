import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgScissorsCutLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 6c0 .732-.197 1.419-.54 2.01L12 10.585l6.728-6.728a2 2 0 012.828 0l-12.11 12.11a4 4 0 11-1.414-1.414L10.586 12 8.032 9.446A4 4 0 1110 6zM8 6a2 2 0 10-4 0 2 2 0 004 0zm13.556 14.142a2 2 0 01-2.828 0l-5.317-5.316 1.415-1.415 6.73 6.731zM16 11h2v2h-2v-2zm4 0h2v2h-2v-2zM6 11h2v2H6v-2zm-4 0h2v2H2v-2zm4 9a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgScissorsCutLine;
