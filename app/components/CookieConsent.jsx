"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "chanak_cookie_consent";
const DEFAULT_PREFERENCES = { advertising: false, analytics: false };

function applyConsent(preferences) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
  });
}

function saveConsent(preferences) {
  const payload = { ...preferences, savedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  applyConsent(preferences);
}

const buttonStyle = {
  border: "none",
  borderRadius: "10px",
  padding: "11px 16px",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: "14px",
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      applyConsent(DEFAULT_PREFERENCES);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      const nextPreferences = {
        advertising: Boolean(parsed.advertising),
        analytics: Boolean(parsed.analytics),
      };
      setPreferences(nextPreferences);
      applyConsent(nextPreferences);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
      applyConsent(DEFAULT_PREFERENCES);
    }
  }, []);

  const acceptAll = () => {
    const nextPreferences = { advertising: true, analytics: true };
    setPreferences(nextPreferences);
    saveConsent(nextPreferences);
    setVisible(false);
    setConfigOpen(false);
  };

  const rejectAll = () => {
    setPreferences(DEFAULT_PREFERENCES);
    saveConsent(DEFAULT_PREFERENCES);
    setVisible(false);
    setConfigOpen(false);
  };

  const saveCustom = () => {
    saveConsent(preferences);
    setVisible(false);
    setConfigOpen(false);
  };

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", inset: "auto 16px 16px 16px", zIndex: 1000, display: "flex", justifyContent: "center", pointerEvents: "none" }}>
      <section aria-label="Panel de consentimiento de cookies" style={{ pointerEvents: "auto", width: "min(100%, 980px)", background: "#FFFFFF", color: "#132A4F", border: "1px solid #DCE4F1", borderRadius: "18px", boxShadow: "0 20px 60px rgba(10, 30, 60, .22)", padding: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "14px" }}>
          <div>
            <h2 style={{ margin: "0 0 6px", fontFamily: "Playfair Display, Georgia, serif", fontSize: "24px", color: "#1A3A6B" }}>Preferencias de cookies</h2>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#35526B" }}>
              Usamos cookies técnicas necesarias y, solo con tu consentimiento, tecnologías de Google Ads / Google Tag para medición publicitaria y analítica. Puedes aceptar, rechazar o configurar tus preferencias.
            </p>
            <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#5A7060" }}>
              Más información en la <a href="/cookies" style={{ color: "#2F6F24", fontWeight: 800 }}>Política de cookies</a> y la <a href="/privacidad" style={{ color: "#2F6F24", fontWeight: 800 }}>Política de privacidad</a>.
            </p>
          </div>

          {configOpen && (
            <div style={{ display: "grid", gap: "10px", background: "#F7FAFC", border: "1px solid #DCE4F1", borderRadius: "14px", padding: "14px" }}>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: 1.5 }}>
                <input type="checkbox" checked disabled style={{ marginTop: "3px" }} />
                <span><strong>Cookies técnicas necesarias</strong><br />Siempre activas para el funcionamiento básico del sitio.</span>
              </label>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: 1.5 }}>
                <input type="checkbox" checked={preferences.advertising} onChange={(event) => setPreferences((current) => ({ ...current, advertising: event.target.checked }))} style={{ marginTop: "3px", accentColor: "#3A7D2C" }} />
                <span><strong>Publicidad y medición</strong><br />Permite Google Ads / Google Tag para medición de campañas y conversiones.</span>
              </label>
              <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: 1.5 }}>
                <input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))} style={{ marginTop: "3px", accentColor: "#3A7D2C" }} />
                <span><strong>Analítica</strong><br />Permite medición analítica si Google Analytics está configurado o se activa más adelante.</span>
              </label>
            </div>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "flex-end" }}>
            <button type="button" onClick={rejectAll} style={{ ...buttonStyle, background: "#EEF3F8", color: "#1A3A6B" }}>Rechazar</button>
            <button type="button" onClick={() => setConfigOpen((open) => !open)} style={{ ...buttonStyle, background: "#FFFFFF", color: "#1A3A6B", border: "1px solid #B8C7D8" }}>Configurar</button>
            {configOpen && <button type="button" onClick={saveCustom} style={{ ...buttonStyle, background: "#D9B86F", color: "#132A4F" }}>Guardar configuración</button>}
            <button type="button" onClick={acceptAll} style={{ ...buttonStyle, background: "#3A7D2C", color: "#FFFFFF" }}>Aceptar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
