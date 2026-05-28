
export const metadata = { title: "Política de cookies | Chanak Foundation", description: "Información sobre cookies, Google Tag, Google Ads y consentimiento." };

const updated = "28 de mayo de 2026";

const pageStyle = { minHeight: "100vh", background: "#F7FAFC", color: "#132A4F", fontFamily: "DM Sans, Arial, sans-serif" };
const wrapStyle = { maxWidth: "960px", margin: "0 auto", padding: "48px 5% 72px" };
const cardStyle = { background: "#fff", border: "1px solid #DCE4F1", borderRadius: "18px", padding: "clamp(24px, 4vw, 42px)", boxShadow: "0 16px 44px rgba(10, 30, 60, .08)" };
const h1Style = { fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", margin: "0 0 12px", color: "#1A3A6B" };
const h2Style = { fontFamily: "Playfair Display, Georgia, serif", fontSize: "26px", marginTop: "32px", color: "#1A3A6B" };
const pStyle = { fontSize: "15px", lineHeight: 1.75, color: "#2D4762" };
const listStyle = { ...pStyle, paddingLeft: "22px" };
const linkStyle = { color: "#2F6F24", fontWeight: 700 };

function Header({ title, intro }) {
  return <div style={{ marginBottom: "26px" }}><a href="/" style={{ ...linkStyle, textDecoration: "none", fontSize: "14px" }}>← Volver al sitio</a><h1 style={h1Style}>{title}</h1><p style={{ ...pStyle, marginTop: 0 }}>{intro}</p><p style={{ fontSize: "13px", color: "#67809A" }}>Última actualización: {updated}</p></div>;
}

function LegalLayout({ title, intro, children }) {
  return <main style={pageStyle}><div style={wrapStyle}><Header title={title} intro={intro} /><article style={cardStyle}>{children}</article></div></main>;
}

function ContactBlock() {
  return <div style={{ background: "#F2F7F2", border: "1px solid #D7E8D2", borderRadius: "14px", padding: "18px", marginTop: "24px" }}><p style={{ ...pStyle, margin: 0 }}><strong>Contacto:</strong> <a href="mailto:administration@chanakacademy.org" style={linkStyle}>administration@chanakacademy.org</a></p><p style={{ ...pStyle, margin: "8px 0 0" }}><strong>Sitio web:</strong> <a href="https://foundation.chanakacademy.org" style={linkStyle}>https://foundation.chanakacademy.org</a></p></div>;
}

export default function CookiesPage() {
  return <LegalLayout title="Política de cookies" intro="Esta página explica cómo usamos cookies y tecnologías similares en foundation.chanakacademy.org.">
    <h2 style={{ ...h2Style, marginTop: 0 }}>1. Qué son las cookies</h2>
    <p style={pStyle}>Las cookies son pequeños archivos o identificadores que se guardan en el navegador para permitir funciones técnicas, recordar preferencias o medir la actividad del sitio, según corresponda.</p>

    <h2 style={h2Style}>2. Tipos de cookies</h2>
    <ul style={listStyle}>
      <li><strong>Técnicas necesarias:</strong> permiten el funcionamiento básico del sitio y no requieren consentimiento cuando son estrictamente necesarias.</li>
      <li><strong>Analíticas:</strong> ayudan a entender el uso del sitio. Google Analytics solo se utilizará si está configurado o se activa más adelante y si el usuario consiente.</li>
      <li><strong>Publicidad y medición:</strong> Google Ads / Google Tag pueden medir campañas o conversiones únicamente de acuerdo con el consentimiento otorgado.</li>
      <li><strong>Pagos:</strong> Stripe puede utilizar tecnologías propias cuando el usuario interactúe con un flujo de donación o pago, si aplica.</li>
    </ul>

    <h2 style={h2Style}>3. Consentimiento</h2>
    <p style={pStyle}>El sitio incluye un banner con opciones de <strong>Aceptar</strong>, <strong>Rechazar</strong> y <strong>Configurar</strong>. Google Ads / Google Tag no activan almacenamiento publicitario ni analítico hasta que exista consentimiento para esas categorías, salvo cookies técnicas necesarias.</p>

    <h2 style={h2Style}>4. Herramientas previstas</h2>
    <ul style={listStyle}>
      <li>Google Ads / Google Tag para medición de campañas, si el usuario consiente.</li>
      <li>Google Analytics solo si está configurado o se activa más adelante, y sujeto al consentimiento de analítica.</li>
      <li>Stripe, si aplica, para procesar donaciones o pagos.</li>
    </ul>

    <h2 style={h2Style}>5. Cambiar preferencias</h2>
    <p style={pStyle}>Puedes cambiar tus preferencias desde el panel de cookies del sitio cuando esté visible o borrando los datos del navegador para que el banner vuelva a solicitar tu elección.</p>

    <h2 style={h2Style}>6. Más información</h2>
    <p style={pStyle}>Para más información sobre el tratamiento de datos personales, consulta la <a href="/privacidad" style={linkStyle}>Política de privacidad</a>.</p>
    <ContactBlock />
  </LegalLayout>;
}
