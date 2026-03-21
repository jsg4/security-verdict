export default function Avatar({
  seed,
  size = 40,
}: {
  seed: string;
  size?: number;
}) {
  // Generate deterministic colors/features from seed string
  const hash = Array.from(seed).reduce((acc, c) => acc + c.charCodeAt(0), 0);

  // Skin tones (realistic range)
  const skinTones = ["#F5D0A9", "#E8B88A", "#D4956B", "#C68642", "#8D5524", "#704214"];
  const skinTone = skinTones[hash % skinTones.length];

  // Hair colors
  const hairColors = ["#2C1810", "#4A2912", "#8B6914", "#D4A84B", "#1A1A1A", "#6B3A2A", "#A0522D"];
  const hairColor = hairColors[(hash * 3) % hairColors.length];

  // Hair styles (short, medium, long indicators)
  const hairStyle = hash % 4;

  // Eye colors
  const eyeColors = ["#4A3728", "#2E5A3E", "#3B6AA0", "#6B4423", "#2C3E50"];
  const eyeColor = eyeColors[(hash * 7) % eyeColors.length];

  // Background
  const bgColors = ["#E8F4FD", "#FDE8E8", "#E8FDE8", "#FDF8E8", "#F0E8FD", "#E8F0FD"];
  const bgColor = bgColors[(hash * 11) % bgColors.length];

  // Gender hint from seed
  const isFeminine = hash % 2 === 0;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="rounded-full flex-shrink-0"
      style={{ minWidth: size, minHeight: size }}
    >
      {/* Background */}
      <circle cx="50" cy="50" r="50" fill={bgColor} />

      {/* Neck */}
      <rect x="38" y="62" width="24" height="16" rx="4" fill={skinTone} />

      {/* Shoulders/shirt */}
      <ellipse cx="50" cy="90" rx="35" ry="20" fill={isFeminine ? "#E55B7A" : "#3B82F6"} />
      <ellipse cx="50" cy="90" rx="30" ry="16" fill={isFeminine ? "#EC6B8A" : "#60A5FA"} />

      {/* Head */}
      <ellipse cx="50" cy="44" rx="22" ry="26" fill={skinTone} />

      {/* Hair */}
      {hairStyle === 0 && (
        <>
          <ellipse cx="50" cy="30" rx="24" ry="16" fill={hairColor} />
          <rect x="26" y="28" width="6" height="14" rx="3" fill={hairColor} />
          <rect x="68" y="28" width="6" height="14" rx="3" fill={hairColor} />
        </>
      )}
      {hairStyle === 1 && (
        <>
          <ellipse cx="50" cy="28" rx="24" ry="14" fill={hairColor} />
          {isFeminine && (
            <>
              <rect x="24" y="26" width="7" height="30" rx="3.5" fill={hairColor} />
              <rect x="69" y="26" width="7" height="30" rx="3.5" fill={hairColor} />
            </>
          )}
        </>
      )}
      {hairStyle === 2 && (
        <>
          <path d="M28 35 Q30 18 50 16 Q70 18 72 35 L72 28 Q70 14 50 12 Q30 14 28 28 Z" fill={hairColor} />
        </>
      )}
      {hairStyle === 3 && (
        <>
          <ellipse cx="50" cy="26" rx="25" ry="14" fill={hairColor} />
          <rect x="26" y="24" width="5" height="20" rx="2.5" fill={hairColor} />
          <rect x="69" y="24" width="5" height="20" rx="2.5" fill={hairColor} />
        </>
      )}

      {/* Eyes */}
      <ellipse cx="40" cy="44" rx="4" ry="3.5" fill="white" />
      <ellipse cx="60" cy="44" rx="4" ry="3.5" fill="white" />
      <circle cx="40.5" cy="44" r="2" fill={eyeColor} />
      <circle cx="60.5" cy="44" r="2" fill={eyeColor} />
      <circle cx="41" cy="43.5" r="0.7" fill="white" />
      <circle cx="61" cy="43.5" r="0.7" fill="white" />

      {/* Eyebrows */}
      <path d={`M35 ${isFeminine ? "39" : "38"} Q40 ${isFeminine ? "37" : "35"} 45 ${isFeminine ? "39" : "37"}`} fill="none" stroke={hairColor} strokeWidth={isFeminine ? "1.2" : "2"} strokeLinecap="round" />
      <path d={`M55 ${isFeminine ? "39" : "38"} Q60 ${isFeminine ? "37" : "35"} 65 ${isFeminine ? "39" : "37"}`} fill="none" stroke={hairColor} strokeWidth={isFeminine ? "1.2" : "2"} strokeLinecap="round" />

      {/* Nose */}
      <path d="M48 48 Q50 53 52 48" fill="none" stroke={`${skinTone}CC`} strokeWidth="1.5" strokeLinecap="round" />

      {/* Mouth - slight smile */}
      <path d="M42 56 Q50 62 58 56" fill="none" stroke="#C0755A" strokeWidth="1.5" strokeLinecap="round" />

      {/* Ears */}
      <ellipse cx="28" cy="44" rx="4" ry="6" fill={skinTone} />
      <ellipse cx="72" cy="44" rx="4" ry="6" fill={skinTone} />
    </svg>
  );
}
