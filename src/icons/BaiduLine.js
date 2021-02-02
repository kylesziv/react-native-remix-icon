import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBaiduLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.564 19.28a9.69 9.69 0 002.496-.217 8.8 8.8 0 012.98-.131c.547.067.985.165 1.288.257 1.078.275 2.61.223 3.005-.41.291-.468.253-.787-.026-1.199a1.886 1.886 0 00-.212-.26 25.006 25.006 0 01-.743-.618 25.618 25.618 0 01-1.753-1.66 16.151 16.151 0 01-1.577-1.893l-.036-.053c-.742-1.139-1.558-1.067-2.002-.317a9.604 9.604 0 01-.955 1.331c-.41.482-.83.89-1.305 1.297-.123.105-.503.42-.412.344-.004.003-.017.015.051-.071-.098.12-.95.877-1.2 1.162-.515.583-.723 1.08-.645 1.48.072.376.219.587.45.745a1.432 1.432 0 00.48.206l.116.007zm7.098-7.276c1.376 1.97 3.732 3.793 3.732 3.793s2.063 1.748.637 4.038c-1.426 2.29-5.253 1.278-5.253 1.278s-1.52-.49-3.286-.098c-1.765.395-3.286.245-3.286.245S5 21.015 4.554 18.701c-.446-2.314 2.06-4.04 2.258-4.284.195-.247 1.512-1.073 2.452-2.658.94-1.586 3.583-2.54 5.398.245zm5.539-1.42c0 .458.19 2.393-1.553 2.432-1.742.038-1.816-1.178-1.816-2.05 0-.913.188-2.205 1.59-2.205 1.4 0 1.779 1.369 1.779 1.824zm-5.43-2.777c-1.18-.152-1.447-1.222-1.333-2.293.096-.875 1.143-2.219 1.981-2.026.837.19 1.6 1.3 1.446 2.254-.151.957-.911 2.218-2.094 2.065zM9.755 7.44c-.86 0-1.56-.993-1.56-2.22 0-1.227.699-2.22 1.56-2.22.863 0 1.56.993 1.56 2.22 0 1.227-.697 2.22-1.56 2.22zm-3.793 4.566c-1.695.365-2.326-1.597-2.14-2.515 0 0 .2-1.987 1.576-2.11 1.093-.095 1.898 1.101 1.981 1.785.051.444.283 2.475-1.417 2.84z" />
    </Svg>
  );
}

export default SvgBaiduLine;
