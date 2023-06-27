import { SVGProps } from "react"
const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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
      <path d="M12 8.433v4.286l4.354 5.074" />
      <g clipPath="url(#b)">
        <path d="M.857 12.72A11.143 11.143 0 1 0 12 1.577a12.394 12.394 0 0 0-8.572 3.428" />
        <path d="m4.285 1.577-.857 3.428 3.429.857" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .72h24v24H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 .72h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default HistoryIcon
