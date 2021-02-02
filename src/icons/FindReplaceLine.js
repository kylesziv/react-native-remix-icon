import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFindReplaceLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.033 16.618l4.28 4.281-1.414 1.415-4.28-4.281A8.963 8.963 0 0111 20a8.998 8.998 0 01-8.065-5H9l-1.304 2.173A6.972 6.972 0 0011 18a6.977 6.977 0 004.875-1.975l.15-.15A6.977 6.977 0 0018 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 01-1.967 5.618zM19.065 7H13l1.304-2.173A6.972 6.972 0 0011 4c-3.868 0-7 3.132-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 012 11c0-4.973 4.027-9 9-9a8.998 8.998 0 018.065 5z" />
    </Svg>
  );
}

export default SvgFindReplaceLine;
