import * as React from "react";
const Logo = ({ inside, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    data-name="Layer 2"
    viewBox="0 0 47.62 47.62"
    className={className}
  >
    {/* <defs>
      <style>{`.cls-1{fill:${ inside ? inside:"#fff"}}`}</style>
    </defs> */}
    <g id="Layer_1-2" data-name="Layer 1">
      <rect width={47.62} height={47.62} rx={6.6} ry={6.6} />
      <path
        d="M32.04 32.41c0 2.23-2.03 3.9-7.02 3.9-3.15 0-6.4-.81-9.12-2.1-1.87-.89-3.26-2.56-3.73-4.57-.44-1.87-.92-4.65-1.15-8.36-.03-.44.58-.61.77-.21 4.07 8.22 20.24 5.4 20.24 11.35ZM15.58 15.22c0-2.23 2.03-3.9 7.02-3.9 3.15 0 6.4.81 9.12 2.1 1.87.89 3.26 2.56 3.73 4.57.44 1.87.92 4.65 1.15 8.36.03.44-.58.61-.77.21-4.07-8.22-20.24-5.4-20.24-11.35Z"
        {...inside}
      />
    </g>
  </svg>
);
export default Logo;
