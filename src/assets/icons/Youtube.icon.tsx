import { SVGProps } from "react"
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#020202"
      strokeMiterlimit={10}
      strokeWidth={3.4}
      d="M37.36 6.82H10.64A7.64 7.64 0 0 0 3 14.46v19.08a7.64 7.64 0 0 0 7.64 7.64h26.72A7.64 7.64 0 0 0 45 33.54V14.46a7.64 7.64 0 0 0-7.64-7.64Z"
    />
    <path
      stroke="#020202"
      strokeMiterlimit={10}
      strokeWidth={3.4}
      d="m32.64 24-15.28 7.64V16.36L32.64 24Z"
    />
  </svg>
)
export default YoutubeIcon