import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDiscussFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.8 19L14 22.5 11.2 19H6a1 1 0 01-1-1V7.103a1 1 0 011-1h16a1 1 0 011 1V18a1 1 0 01-1 1h-5.2zM2 2h17v2H3v11H1V3a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgDiscussFill;
