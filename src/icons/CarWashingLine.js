import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCarWashingLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 21H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1V12l2.417-4.029A2 2 0 016.132 7h11.736a2 2 0 011.715.971L22 12v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm1-7H4v5h16v-5zM4.332 12h15.336l-1.8-3H6.132l-1.8 3zM5.44 3.44L6.5 2.378l1.06 1.06a1.5 1.5 0 11-2.121 0zm5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 11-2.121 0zm5.5 0l1.06-1.062 1.06 1.06a1.5 1.5 0 11-2.121 0zM6.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgCarWashingLine;
