import { SVGProps } from 'react'
const LibraryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="M6.857 1.528H21.43c.946 0 1.714.768 1.714 1.714v14.572c0 .947-.768 1.714-1.714 1.714H6.857a1.714 1.714 0 0 1-1.714-1.714V3.242c0-.946.767-1.714 1.714-1.714Z" />
      <path d="M.857 6.671V22.1a1.714 1.714 0 0 0 1.714 1.714H18M11.342 13.768v-6.48a.617.617 0 0 1 .943-.532l5.606 3.24a.617.617 0 0 1 0 1.063l-5.606 3.326a.617.617 0 0 1-.943-.617Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M24 .671H0v24h24z" />
      </clipPath>
    </defs>
  </svg>
)
export default LibraryIcon
