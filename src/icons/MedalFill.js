import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMedalFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 7a8 8 0 110 16 8 8 0 010-16zm0 3.5l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L12 17.25l2.645 1.39-.505-2.945 2.14-2.086-2.957-.43L12 10.5zm1-8.501L18 2v3l-1.363 1.138A9.935 9.935 0 0013 5.049V2zm-2 0v3.05a9.935 9.935 0 00-3.636 1.088L6 5V2l5-.001z" />
    </Svg>
  );
}

export default SvgMedalFill;
