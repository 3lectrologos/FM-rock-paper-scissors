export default function Scissors({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102 103"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_0_667)">
        <ellipse cx="51" cy="48.5" rx="48" ry="48.5" fill="#C76C1B" />
      </g>
      <ellipse cx="51" cy="46.3498" rx="48" ry="46.3498" fill="#EB9F0E" />
      <ellipse
        cx="51"
        cy="46.3498"
        rx="48"
        ry="46.3498"
        fill="url(#paint0_linear_0_667)"
      />
      <ellipse
        cx="50.9999"
        cy="47.3055"
        rx="36.8485"
        ry="36.3153"
        fill="#BABFD4"
      />
      <ellipse
        cx="50.9999"
        cy="49.2169"
        rx="36.8485"
        ry="34.4039"
        fill="url(#paint1_linear_0_667)"
      />
      <path
        d="M41.3805 46.9945L45.3608 41.4789C43.7064 41.2071 40.6683 41.1469 38.1797 43.5994C34.257 47.4654 32.6683 55.8169 32.3371 57.8386L42.3069 67.6641C44.1016 67.5126 52.0479 66.4671 59.7048 58.921C59.7861 58.7581 61.6512 57.3998 60.1263 55.897C59.3985 55.1797 58.1937 55.1931 57.45 55.9259C57.0715 56.2991 56.4826 56.3045 56.1119 55.9392C55.7412 55.5738 55.7468 54.9935 56.1254 54.6204L58.831 51.954C60.206 50.5988 58.9099 48.3128 56.9909 48.862L54.7757 50.7308C54.3712 51.0784 53.77 51.0181 53.4375 50.6394C53.0939 50.2474 53.1674 49.6537 53.5583 49.3196C61.2959 42.6291 60.1664 43.4348 65.1442 38.8364C67.0042 37.3103 64.6646 34.6107 62.8318 36.1564L50.7893 46.8288C50.4391 47.1229 49.9021 47.1284 49.5573 46.8154C49.1595 46.4768 49.1503 45.989 49.4104 45.6036L57.8103 32.734C59.0381 31.0953 56.6216 29.2752 55.3284 30.9273L42.9086 48.046C42.6091 48.4727 42.0055 48.5706 41.5942 48.2722C41.1816 47.9992 41.0686 47.4066 41.3805 46.9945Z"
        fill="#3B4262"
      />
      <defs>
        <filter
          id="filter0_d_0_667"
          x="0"
          y="0"
          width="102"
          height="103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_667"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_667"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_667"
          x1="3"
          y1="0"
          x2="3"
          y2="92.6995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.0966455" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_667"
          x1="87.2376"
          y1="83.6209"
          x2="87.2376"
          y2="15.9535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
