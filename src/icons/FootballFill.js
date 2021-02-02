import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFootballFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0012 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16zm-8.376-5.128l-1.292.937L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778zm13.412 0l-2.393.778-1.028 3.17 1.322 1.82h1.91A7.964 7.964 0 0020 12l-.003-.191-1.291-.937zM14.29 4.333l-1.29.94V7.79l2.694 1.957 2.239-.727.554-1.703a8.014 8.014 0 00-4.196-2.984zm-4.582 0a8.014 8.014 0 00-4.196 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.291-.94z" />
    </Svg>
  );
}

export default SvgFootballFill;
