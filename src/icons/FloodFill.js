import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFloodFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 17.472A5.978 5.978 0 0020 19h2v2h-2a7.963 7.963 0 01-4-1.07A7.96 7.96 0 0112 21a7.963 7.963 0 01-4-1.07A7.96 7.96 0 014 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.978 5.978 0 0012 19c1.537 0 2.94-.578 4-1.528zm-3.427-15.94l.1.08L23 11h-3v6a4.992 4.992 0 01-4-2 4.99 4.99 0 01-4 2 4.992 4.992 0 01-4-2 4.99 4.99 0 01-4 2l-.001-6H1l10.327-9.388a1 1 0 011.14-.145l.106.065z" />
    </Svg>
  );
}

export default SvgFloodFill;
