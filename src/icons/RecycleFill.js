import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRecycleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19.562 12.098l1.531 2.652a3.5 3.5 0 01-3.03 5.25H16v2l-5-3.5 5-3.5v2h2.062a.498.498 0 00.471-.668l-.038-.082-1.531-2.652 2.598-1.5zM7.737 9.384l.53 6.08-1.73-1-1.032 1.786a.498.498 0 00.343.742l.09.008H9v3H5.938a3.5 3.5 0 01-3.031-5.25l1.031-1.786-1.732-1 5.53-2.58zm6.013-6.415c.532.307.974.749 1.281 1.281l1.03 1.786 1.733-1-.53 6.08-5.532-2.58 1.732-1-1.031-1.786a.498.498 0 00-.814-.073l-.052.073-1.53 2.652-2.599-1.5 1.53-2.652a3.5 3.5 0 014.782-1.281z" />
    </Svg>
  );
}

export default SvgRecycleFill;
