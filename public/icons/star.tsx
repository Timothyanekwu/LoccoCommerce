import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Star = ({ color, ...props }: Props) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 0C22.7469 11.8271 32.1728 21.2531 44 22C32.1728 22.7469 22.7469 32.1728 22 44C21.2531 32.1728 11.8271 22.7469 0 22C11.8271 21.2531 21.2531 11.8271 22 0Z"
      fill={color || "#00000"}
    />
  </svg>
);
export default Star;
