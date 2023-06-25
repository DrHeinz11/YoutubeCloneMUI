import * as React from "react"
import { SVGProps } from "react"
const ExploreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="M15.78 29.308c7.698 0 13.94-6.24 13.94-13.94 0-7.698-6.242-13.939-13.94-13.939C8.08 1.43 1.84 7.67 1.84 15.37c0 7.698 6.241 13.94 13.94 13.94Z" />
      <path d="M19.66 19.248 21.6 9.55l-9.7 1.94-1.94 9.7 9.7-1.94ZM11.9 11.49l7.76 7.759" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.768.356h30.024V30.38H.768z" />
      </clipPath>
    </defs>
  </svg>
)
export default ExploreIcon
