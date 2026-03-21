export default function ScoreRing({
  score,
  size = 64,
}: {
  score: number;
  size?: number;
}) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 10) * circumference;

  const color =
    score >= 9
      ? "var(--success)"
      : score >= 8
        ? "var(--primary)"
        : score >= 7
          ? "var(--warning)"
          : "var(--danger)";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={4}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-bold text-[var(--foreground)]"
          style={{ fontSize: size * 0.28 }}
        >
          {score}
        </span>
      </div>
    </div>
  );
}
