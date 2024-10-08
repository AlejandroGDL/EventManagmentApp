import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const Settings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M0 0h30v30H0z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use
          xlinkHref="#b"
          transform="scale(.01042)"
        />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export default Settings;
