"use client";

export default function NotificationToast({
  text,
  show,
}) {
  if (!show) return null;

  return (
    <div style={toast}>
      <div style={icon}>🔔</div>

      <div>
        <h3 style={title}>
          New Notification
        </h3>

        <p style={textStyle}>
          {text}
        </p>
      </div>
    </div>
  );
}

const toast = {
  position: "fixed",
  top: 90,
  right: 24,
  zIndex: 9999,
  minWidth: 320,
  display: "flex",
  gap: 14,
  alignItems: "center",
  padding: "18px",
  borderRadius: 22,
  background: "rgba(15,23,42,.96)",
  border: "1px solid rgba(255,255,255,.12)",
  boxShadow:
    "0 20px 50px rgba(0,0,0,.45)",
  backdropFilter: "blur(18px)",
  animation: "slideIn .35s ease",
};

const icon = {
  width: 52,
  height: 52,
  borderRadius: 16,
  background:
    "linear-gradient(135deg,#f97316,#db2777)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  flexShrink: 0,
};

const title = {
  margin: 0,
  marginBottom: 4,
  fontSize: 18,
};

const textStyle = {
  margin: 0,
  color: "#94a3b8",
  lineHeight: 1.5,
};
