interface FooterWaveProps {
  width: number;
}

export function FooterWave({ width }: FooterWaveProps) {
  return (
    <svg
      width={width}
      viewBox="0 0 1512 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M487 82.5C55 -28 70.5 247.5 0 292H1511.5V1.5C1314 65.3333 832.6 170.9 487 82.5Z"
        fill="#CDC5ED"
        stroke="#AC9EE1"
        width="100%"
      />
    </svg>
  );
}
