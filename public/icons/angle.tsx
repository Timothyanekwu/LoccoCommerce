import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Angle = ({ color, ...props }: Props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    {/* <g id="icomoon-ignore" /> */}
    <path
      d="M12.792 15.233l-0.754 0.754 6.035 6.035 0.754-0.754-5.281-5.281 5.256-5.256-0.754-0.754-3.013 3.013z"
      fill={color || "#00000"}
    />
  </svg>
);
export default Angle;
