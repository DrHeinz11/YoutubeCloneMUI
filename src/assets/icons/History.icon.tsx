import * as React from "react"
import { SVGProps } from "react"
const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15.78 9.725v5.362l5.447 6.348" />
      <g clipPath="url(#b)">
        <path d="M1.84 15.088a13.94 13.94 0 1 0 13.94-13.94 15.505 15.505 0 0 0-10.723 4.29" />
        <path d="m6.13 1.148-1.073 4.29 4.29 1.072" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.768.076h30.024V30.1H.768z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.768.076h30.024V30.1H.768z" />
      </clipPath>
    </defs>
  </svg>
)
export default HistoryIcon
