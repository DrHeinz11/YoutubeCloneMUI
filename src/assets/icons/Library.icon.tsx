import * as React from "react"
import { SVGProps } from "react"
const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M9.347 1.1h18.228c1.185 0 2.145.96 2.145 2.144v18.229c0 1.184-.96 2.144-2.145 2.144H9.347a2.145 2.145 0 0 1-2.145-2.144V3.244c0-1.184.96-2.144 2.145-2.144Z" />
      <path d="M1.84 7.533v19.301a2.145 2.145 0 0 0 2.145 2.145h19.301M14.957 16.411V8.305a.773.773 0 0 1 1.18-.665l7.012 4.053a.773.773 0 0 1 0 1.33l-7.012 4.16a.772.772 0 0 1-1.18-.772Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M30.792.028H.768v30.024h30.024z" />
      </clipPath>
    </defs>
  </svg>
)
export default LibraryIcon
