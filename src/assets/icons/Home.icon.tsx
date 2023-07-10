import { SVGProps } from 'react'

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} fill="none" {...props}>
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="M1.84 15.32 15.78 1.382l13.94 13.94M6.13 18.538V29.26h19.3V18.538" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.768.31h30.024v30.023H.768z" />
      </clipPath>
    </defs>
  </svg>
)
export default HomeIcon
