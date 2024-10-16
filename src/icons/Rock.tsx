export default function Rock({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102 103"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_0_677)">
        <ellipse cx="51" cy="48.5" rx="48" ry="48.5" fill="#9D1634" />
      </g>
      <ellipse cx="51" cy="46.3498" rx="48" ry="46.3498" fill="#DB2E4D" />
      <ellipse
        cx="51"
        cy="46.3498"
        rx="48"
        ry="46.3498"
        fill="url(#paint0_linear_0_677)"
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
        fill="url(#paint1_linear_0_677)"
      />
      <path
        d="M65.2743 42.0899C64.8493 36.7843 58.8298 37.326 58.8298 37.326C56.289 32.8924 52.3199 36.1038 52.3199 36.1038C49.2706 31.7585 45.4474 35.7851 45.4474 35.7851C38.8555 35.0814 39.111 40.4164 39.111 40.4164C38.9559 42.1124 40.04 47.3592 40.04 47.3592C39.0621 44.3351 36.9409 46.8454 36.9409 46.8454C34.3332 50.8288 36.2961 53.0093 36.2961 53.0093C39.8247 57.1032 47.3445 62.0164 47.3445 62.0164C50.0673 63.5605 48.9156 64.9374 48.9156 64.9374L65.385 62.2436L65.7636 59.1518C68.2672 51.6563 65.2743 42.0899 65.2743 42.0899Z"
        fill="#3B4262"
      />
      <defs>
        <filter
          id="filter0_d_0_677"
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
            result="effect1_dropShadow_0_677"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_677"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_677"
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
          id="paint1_linear_0_677"
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
