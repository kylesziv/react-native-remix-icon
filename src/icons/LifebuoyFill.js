import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLifebuoyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM7.197 14.682l-2.175 2.174a8.549 8.549 0 001.818 1.899l.305.223 2.173-2.175a5.527 5.527 0 01-1.98-1.883l-.14-.238zm9.606 0a5.527 5.527 0 01-1.883 1.98l-.238.14 2.174 2.176a8.549 8.549 0 001.899-1.818l.223-.304-2.175-2.174zM12 8a4 4 0 100 8 4 4 0 000-8zM7.145 5.022a8.549 8.549 0 00-1.9 1.818l-.223.305 2.175 2.173a5.527 5.527 0 011.883-1.98l.238-.14-2.173-2.176zm9.71 0l-2.173 2.175a5.527 5.527 0 011.98 1.883l.14.238 2.176-2.173a8.549 8.549 0 00-1.818-1.9l-.304-.223z" />
    </Svg>
  );
}

export default SvgLifebuoyFill;
