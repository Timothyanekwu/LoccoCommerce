import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const RatingStar = ({ color, ...props }: Props) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0001 0L12.7184 5.85334L19.1252 6.62984L14.3984 11.0239L15.6397 17.3571L10.0001 14.2195L4.36039 17.3571L5.60172 11.0239L0.874876 6.62984L7.28174 5.85334L10.0001 0Z"
      fill={color || "#FFC633"}
    />
  </svg>
);
export default RatingStar;
