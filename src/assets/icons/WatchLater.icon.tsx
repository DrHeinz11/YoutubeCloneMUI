import * as React from "react"
import { SVGProps } from "react"
const WatchLaterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.78 29.073c7.699 0 13.94-6.24 13.94-13.94 0-7.698-6.241-13.939-13.94-13.939S1.84 7.435 1.84 15.134c0 7.698 6.241 13.94 13.94 13.94Z" />
      <path d="M15.78 9.772v5.362l5.447 6.348" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.768.122h30.024v30.024H.768z" />
      </clipPath>
    </defs>
  </svg>
)
export default WatchLaterIcon
