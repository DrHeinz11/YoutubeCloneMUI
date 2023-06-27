import * as React from "react"
import { SVGProps } from "react"
const SubscriptionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="M24 0H0v24h24z" />
      <path
        stroke="#070707"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.145}
        d="M2.986 9.428H21.02c1.172 0 2.122.694 2.122 1.551v10.612c0 .857-.95 1.551-2.122 1.551H2.986c-1.172 0-2.122-.694-2.122-1.55V10.978c0-.856.95-1.55 2.122-1.55Z"
      />
      <path
        stroke="#070707"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.145}
        d="M9.4 19.088v-5.685a.541.541 0 0 1 .827-.466l4.918 2.842a.54.54 0 0 1 0 .933l-4.918 2.918a.541.541 0 0 1-.827-.542ZM2 5.434h20M4 1.073h15.012"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M24 0H0v24h24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SubscriptionIcon
