import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileHwpLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 2l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001v.668zm-6.667 6v1.999H16V18H8v-3.333h1.333zM12 14.333a1 1 0 110 2 1 1 0 010-2zM12 9a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.333a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334z" />
    </Svg>
  );
}

export default SvgFileHwpLine;
