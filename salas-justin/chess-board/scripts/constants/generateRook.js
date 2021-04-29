const viewBox = "0 0 45 45";

export default function (color) {
  const fill = color === "black" ? "#000" : "#fff";
  const stroke = color === "black" ? "#fff" : "#000";
  const stroke2 = color === "black" ? "#000" : "#000";
  return `<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100%"
  viewBox="${viewBox}"
>
  <g
    style="
      opacity: 1;
      fill: ${fill};
      fill-opacity: 1;
      fill-rule: evenodd;
      stroke: ${stroke2};
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 4;
      stroke-dasharray: none;
      stroke-opacity: 1;
    "
  >
    <path
      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      style="stroke-linecap: butt"
    />
    <path
      d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
      style="stroke-linecap: butt"
    />
    <path
      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
      style="stroke-linecap: butt"
    />
    <path
      d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
      style="stroke-linecap: butt; stroke-linejoin: miter"
    />
    <path
      d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
      style="stroke-linecap: butt"
    />
    <path
      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
      style="stroke-linecap: butt"
    />
    <path
      d="M 12,35.5 L 33,35.5 L 33,35.5"
      style="
        fill: none;
        stroke: ${stroke};
        stroke-width: 1;
        stroke-linejoin: miter;
      "
    />
    <path
      d="M 13,31.5 L 32,31.5"
      style="
        fill: none;
        stroke: ${stroke};
        stroke-width: 1;
        stroke-linejoin: miter;
      "
    />
    <path
      d="M 14,29.5 L 31,29.5"
      style="
        fill: none;
        stroke: ${stroke};
        stroke-width: 1;
        stroke-linejoin: miter;
      "
    />
    <path
      d="M 14,16.5 L 31,16.5"
      style="
        fill: none;
        stroke: ${stroke};
        stroke-width: 1;
        stroke-linejoin: miter;
      "
    />
    <path
      d="M 11,14 L 34,14"
      style="
        fill: none;
        stroke: ${stroke};
        stroke-width: 1;
        stroke-linejoin: miter;
      "
    />
  </g>
</svg>`;
}
