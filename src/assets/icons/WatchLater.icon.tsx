import { SVGProps } from 'react'
const WatchLaterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="M12 23.909c6.154 0 11.143-4.99 11.143-11.143 0-6.154-4.989-11.143-11.143-11.143C5.846 1.623.857 6.612.857 12.766c0 6.154 4.99 11.143 11.143 11.143Z" />
      <path d="M12 8.48v4.286l4.355 5.074" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .766h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default WatchLaterIcon
