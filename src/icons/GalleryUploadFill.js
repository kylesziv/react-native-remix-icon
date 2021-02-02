import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGalleryUploadFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 1v2h8V1h2v2h3.008c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3H6V1h2zm4 7l-4 4h3v4h2v-4h3l-4-4z" />
    </Svg>
  );
}

export default SvgGalleryUploadFill;
