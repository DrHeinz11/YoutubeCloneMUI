import { SVGProps } from 'react'
const ExploreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <g
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.145}
      clipPath="url(#a)"
    >
      <path d="M12 23.143c6.154 0 11.143-4.989 11.143-11.143C23.143 5.847 18.153.859 12 .859 5.846.858.857 5.846.857 12c0 6.153 4.989 11.142 11.143 11.142Z" />
      <path d="m15.101 15.102 1.55-7.754-7.753 1.55-1.55 7.754 7.753-1.55ZM8.898 8.9l6.203 6.202" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default ExploreIcon
