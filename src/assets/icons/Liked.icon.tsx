import * as React from "react"
import { SVGProps } from "react"
const LikedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="m7.995 12.715 5.448-8.707a2.338 2.338 0 0 1 2.015-1.115 2.38 2.38 0 0 1 2.467 2.359v6.24h9.414a2.467 2.467 0 0 1 2.36 2.831L27.982 25.39a2.444 2.444 0 0 1-2.424 2.145H11.491a4.289 4.289 0 0 1-1.93-.45l-1.544-.773M7.995 12.715v13.532M2.913 12.715h5.082v13.532H2.913a1.072 1.072 0 0 1-1.073-1.072V13.787a1.072 1.072 0 0 1 1.073-1.072v0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.768.17h30.024v30.023H.768z" />
      </clipPath>
    </defs>
  </svg>
)
export default LikedIcon
