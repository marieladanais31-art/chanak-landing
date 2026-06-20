"use client";

import { useCallback, useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "chanakCookieConsent";

function updateGoogleConsent(analyticsStorage, adStorage) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
  window.gtag("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: adStorage,
    ad_user_data: adStorage,
    ad_personalization: adStorage,
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  const openPreferences = useCallback(() => {
    setShowConfig(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (savedConsent === "accepted") {
      updateGoogleConsent("granted", "granted");
      return;
    }

    if (savedConsent === "rejected") {
      updateGoogleConsent("denied", "denied");
      return;
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    window.chanakOpenCookiePreferences = openPreferences;

    const handleOpenPreferences = () => openPreferences();
    window.addEventListener("chanak:open-cookie-preferences", handleOpenPreferences);

    return () => {
      window.removeEventListener("chanak:open-cookie-preferences", handleOpenPreferences);
      if (window.chanakOpenCookiePreferences === openPreferences) {
        delete window.chanakOpenCookiePreferences;
      }
    };
  }, [openPreferences]);

  const savePreference = (preference) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, preference);

    if (preference === "accepted") {
      updateGoogleConsent("granted", "granted");
      window.dispatchEvent(new Event("chanak:cookies-accepted"));
    } else {
      updateGoogleConsent("denied", "denied");
    }

    setVisible(false);
    setShowConfig(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      style={{
        position: "fixed",
        left: "16px",
        right: "16px",
        bottom: "16px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "min(920px, 100%)",
          background: "#fff",
          color: "#132A4F",
          border: "1px solid #D7E3F5",
          borderTop: "4px solid #3A7D2C",
          borderRadius: "16px",
          boxShadow: "0 22px 60px rgba(8,20,42,.25)",
          padding: "20px",
          fontFamily: "DM Sans, sans-serif",
          pointerEvents: "auto",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
          <div>
            <h2 style={{ margin: "0 0 8px", fontSize: "20px", color: "#1A3A6B" }}>Preferencias de cookies</h2>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#3D5571" }}>
              Usamos cookies técnicas necesarias para que la web funcione. Solo activaremos medición, Google Tag o Google Ads si aceptas cookies de analítica y publicidad. Puedes leer más en nuestra <a href="/cookies" style={{ color: "#1A3A6B", fontWeight: 700 }}>Política de Cookies</a>.
            </p>
          </div>

          {showConfig && (
            <div style={{ background: "#F8FBFF", border: "1px solid #DEE8F6", borderRadius: "12px", padding: "14px" }}>
              <p style={{ margin: "0 0 8px", fontWeight: 700 }}>Configuración disponible</p>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#3D5571", fontSize: "14px", lineHeight: 1.6 }}>
                <li>Cookies técnicas: necesarias y siempre activas.</li>
                <li>Analítica y publicidad: se activan únicamente al pulsar “Aceptar cookies”.</li>
              </ul>
            </div>
          )}

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button type="button" onClick={() => savePreference("accepted")} style={buttonStyle("#3A7D2C", "#fff", "#3A7D2C")}>Aceptar cookies</button>
            <button type="button" onClick={() => savePreference("rejected")} style={buttonStyle("#fff", "#1A3A6B", "#1A3A6B")}>Rechazar cookies</button>
            <button type="button" onClick={() => setShowConfig((current) => !current)} style={buttonStyle("#EFF5FF", "#1A3A6B", "#D7E3F5")}>Configurar cookies</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function buttonStyle(background, color, borderColor) {
  return {
    border: `1px solid ${borderColor}`,
    borderRadius: "10px",
    background,
    color,
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 700,
    minHeight: "42px",
    padding: "10px 16px",
  };
}
