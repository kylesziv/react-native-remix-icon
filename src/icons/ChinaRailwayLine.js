import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChinaRailwayLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 20v-7H9v-3h6v3h-2v7h5v2H6v-2h5zM10 2.223V1h4v1.223a9.003 9.003 0 012.993 16.266l-1.11-1.664a7 7 0 10-7.767 0l-1.109 1.664A9.003 9.003 0 0110 2.223z" />
    </Svg>
  );
}

export default SvgChinaRailwayLine;
