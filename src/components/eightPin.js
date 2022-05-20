export function EightPin() {
  return (
    <g class="eight-pin">
      <circle cx={'100'} cy={'100'} r={3} fill="blue" />
      <path d="M100 100 H130" strokeWidth={1} stroke="red" />

      <circle cx={100} cy={120} r={3} fill="blue" />
      <path d="M100 120 H130" strokeWidth={1} stroke="red" />

      <circle cx={100} cy={140} r={3} fill="blue" />
      <path d="M100 140 H130" strokeWidth={1} stroke="red" />

      <circle cx={100} cy={160} r={3} fill="blue" />
      <path d="M100 160 H130" strokeWidth={1} stroke="red" />

      <path d="M200 100 H230" strokeWidth={1} stroke="red" />
      <circle cx={230} cy={160} r={3} fill="blue" />

      <path d="M 200 120 H230" strokeWidth={1} stroke="red" />
      <circle cx={230} cy={140} r={3} fill="blue" />

      <path d="M200 140 H230" strokeWidth={1} stroke="red" />
      <circle cx={230} cy={120} r={3} fill="blue" />

      <path d="M200 160 H230" strokeWidth={1} stroke="red" />
      <circle cx={230} cy={100} r={3} fill="blue" />
      <rect x={130} y={90} width={70} height={80} fill="yellow" stroke="blue" />
    </g>
  );
}
