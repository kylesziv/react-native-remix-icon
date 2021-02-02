import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPingPongFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.5 2a9.5 9.5 0 019.5 9.5 9.46 9.46 0 01-1.003 4.254l2.463 2.464a1 1 0 010 1.414l-2.828 2.828a1 1 0 01-1.414 0l-2.464-2.463A9.46 9.46 0 0111.5 21a9.5 9.5 0 010-19zm5.303 13.388l-1.414 1.414 3.536 3.535 1.414-1.414-3.536-3.535zm1.864-6.105l-9.384 9.384A7.51 7.51 0 0011.5 19a7.48 7.48 0 002.74-.516l-.972-.974a1 1 0 010-1.414l2.828-2.828a1 1 0 011.414 0l.974.972A7.48 7.48 0 0019 11.5c0-.772-.117-1.516-.333-2.217z" />
    </Svg>
  );
}

export default SvgPingPongFill;
