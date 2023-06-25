import * as React from "react"
import { SVGProps } from "react"
const SubscriptionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M3.773 11.836h22.562c1.466 0 2.654.869 2.654 1.94v13.276c0 1.072-1.188 1.94-2.654 1.94H3.773c-1.466 0-2.654-.869-2.654-1.94V13.776c0-1.071 1.188-1.94 2.654-1.94Z" />
      <path d="M11.797 23.92v-7.112a.678.678 0 0 1 1.035-.583l6.152 3.556a.678.678 0 0 1 0 1.167l-6.152 3.65a.678.678 0 0 1-1.035-.678ZM3.255 6.475h23.59M7.544 1.114h15.012" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M30.062.041H.038v30.024h30.024z" />
      </clipPath>
    </defs>
  </svg>
)
export default SubscriptionIcon
