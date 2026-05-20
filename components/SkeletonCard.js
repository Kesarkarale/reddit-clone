export default function SkeletonCard() {
  return (
    <div style={card}>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -400px 0;
          }

          100% {
            background-position: 400px 0;
          }
        }
      `}</style>

      <div style={row}>
        <div style={avatar}></div>

        <div style={{ flex: 1 }}>
          <div style={lineBig}></div>
          <div style={lineSmall}></div>
        </div>
      </div>

      <div style={image}></div>

      <div style={line}></div>

      <div style={lineShort}></div>
    </div>
  );
}

const shimmer = {
  background:
    "linear-gradient(90deg, rgba(255,255,255,.05) 25%, rgba(255,255,255,.14) 50%, rgba(255,255,255,.05) 75%)",

  backgroundSize: "400px 100%",

  animation: "shimmer 1.4s infinite linear",
};

const card = {
  padding: 24,

  borderRadius: 26,

  background: "var(--card-bg)",

  border: "1px solid var(--border-color)",
};

const row = {
  display: "flex",

  gap: 14,

  alignItems: "center",

  marginBottom: 18,
};

const avatar = {
  width: 52,

  height: 52,

  borderRadius: 16,

  ...shimmer,
};

const lineBig = {
  height: 18,

  borderRadius: 999,

  marginBottom: 10,

  ...shimmer,
};

const lineSmall = {
  width: "55%",

  height: 12,

  borderRadius: 999,

  ...shimmer,
};

const image = {
  height: 150,

  borderRadius: 20,

  marginBottom: 18,

  ...shimmer,
};

const line = {
  height: 14,

  borderRadius: 999,

  marginBottom: 10,

  ...shimmer,
};

const lineShort = {
  width: "70%",

  height: 14,

  borderRadius: 999,

  ...shimmer,
};
