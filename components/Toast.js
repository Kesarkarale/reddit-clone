export default function Toast({ message, type }) {
  if (!message) return null;

  return (
    <div style={toast(type)}>
      {type === "success" ? "✅" : "⚠️"} {message}
    </div>
  );
}

const toast = (type) => ({
  position: "fixed",
  top: 90,
  right: 24,
  zIndex: 9999,
  padding: "15px 20px",
  borderRadius: 18,
  background:
    type === "success"
      ? "rgba(34,197,94,.16)"
      : "rgba(244,63,94,.16)",
  border:
    type === "success"
      ? "1px solid rgba(34,197,94,.35)"
      : "1px solid rgba(244,63,94,.35)",
  color: type === "success" ? "#86efac" : "#fda4af",
  fontWeight: 900,
  boxShadow: "0 18px 45px rgba(0,0,0,.25)",
  backdropFilter: "blur(16px)",
});
