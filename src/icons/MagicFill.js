import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMagicFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15.224 15.508l-2.213 4.65a.6.6 0 01-.977.155l-3.542-3.739a.6.6 0 00-.357-.182l-5.107-.668a.6.6 0 01-.449-.881l2.462-4.524a.6.6 0 00.062-.396L4.16 4.86a.6.6 0 01.7-.7l5.063.943a.6.6 0 00.396-.062l4.524-2.462a.6.6 0 01.881.45l.668 5.106a.6.6 0 00.182.357l3.739 3.542a.6.6 0 01-.155.977l-4.65 2.213a.6.6 0 00-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z" />
    </Svg>
  );
}

export default SvgMagicFill;
