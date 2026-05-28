"use client";

export default function CookiePreferencesButton() {
  const openPreferences = () => {
    window.localStorage.removeItem("chanakCookieConsent");
    window.dispatchEvent(new Event("chanak:open-cookie-preferences"));
    window.chanakOpenCookiePreferences?.();
  };

  return (
    <button
      type="button"
      onClick={openPreferences}
      style={{
        border: "none",
        borderRadius: "10px",
        background: "#3A7D2C",
        color: "#fff",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 700,
        padding: "12px 18px",
      }}
    >
      Cambiar configuración de cookies
    </button>
  );
}
