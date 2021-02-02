import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTakeawayLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 1a1 1 0 011 1v.999L22 3v6l-2.02-.001 2.767 7.596a4 4 0 11-7.62 2.406h-4.253a4.002 4.002 0 01-7.8-.228A1.997 1.997 0 012 17V4a1 1 0 011-1h7a1 1 0 011 1v8a1 1 0 00.883.993L12 13h2a1 1 0 00.993-.883L15 12V3h-3V1h4zM7 16a2 2 0 100 4 2 2 0 000-4zm12-.001a2 2 0 100 4 2 2 0 000-4zm-1.148-7H17V12a3 3 0 01-3 3h-2a3.001 3.001 0 01-2.829-2H4v2.354A4.002 4.002 0 0110.874 17h4.252a4.002 4.002 0 014.57-2.94l-1.844-5.061zM9 8H4v3h5V8zm11-3h-3v2h3V5zM9 5H4v1h5V5z" />
    </Svg>
  );
}

export default SvgTakeawayLine;
