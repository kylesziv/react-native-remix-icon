import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgXboxLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.797 15.485c1.124-2.52 3.2-5.44 4.487-6.962-1.248-1.246-2.162-1.931-2.818-2.3A7.977 7.977 0 004 12c0 1.25.286 2.432.797 3.485zm4.051-10.84C10.448 5.05 12 5.959 12 5.959v-.005s1.552-.904 3.151-1.31A7.974 7.974 0 0012 4c-1.12 0-2.185.23-3.152.645zm8.686 1.578c-.655.37-1.568 1.055-2.816 2.3 1.287 1.523 3.362 4.441 4.486 6.961A7.968 7.968 0 0020 12c0-2.27-.946-4.32-2.466-5.777zm.408 11.133c-1.403-2.236-4.09-4.944-5.942-6.343-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0012 20a7.98 7.98 0 005.942-2.644zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgXboxLine;
