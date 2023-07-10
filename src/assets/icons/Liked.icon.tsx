import { SVGProps } from 'react'
const LikedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="m5.777 10.842 4.354-6.96a1.868 1.868 0 0 1 1.612-.892 1.903 1.903 0 0 1 1.971 1.886v4.988h7.526a1.971 1.971 0 0 1 1.886 2.263l-1.372 8.846a1.954 1.954 0 0 1-1.937 1.714H8.571a3.429 3.429 0 0 1-1.542-.36l-1.235-.617M5.777 10.841V21.66M1.714 10.841h4.063V21.66H1.714a.857.857 0 0 1-.857-.858V11.7a.857.857 0 0 1 .857-.858v0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .813h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default LikedIcon
