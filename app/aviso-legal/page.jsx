
export const metadata = { title: "Aviso legal | Chanak Foundation", description: "Aviso legal de Chanak Foundation." };

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

export default function LegalNoticePage() {
  return <LegalLayout title="Aviso legal" intro="Información general del titular, finalidad y condiciones básicas de uso del sitio.">
    <h2 style={{ ...h2Style, marginTop: 0 }}>1. Titular del sitio</h2>
    <p style={pStyle}><strong>Chanak TrainUp Education Inc. / Chanak International Academy</strong> <strong>[PENDIENTE CONFIRMAR NOMBRE LEGAL EXACTO]</strong>.</p>
    <p style={pStyle}>Dirección física: <strong>[PENDIENTE DE COMPLETAR]</strong>.</p>
    <p style={pStyle}>EIN, NIF, CIF u otros identificadores fiscales: <strong>[PENDIENTE DE COMPLETAR]</strong>.</p>
    <p style={pStyle}>Datos registrales: <strong>[PENDIENTE DE COMPLETAR]</strong>.</p>

    <h2 style={h2Style}>2. Sitio web</h2>
    <p style={pStyle}>El sitio web principal de esta página es <a href="https://foundation.chanakacademy.org" style={linkStyle}>https://foundation.chanakacademy.org</a>.</p>

    <h2 style={h2Style}>3. Finalidad</h2>
    <p style={pStyle}>El sitio tiene una finalidad informativa y de captación de donativos para apoyar programas educativos, becas, expansión de iniciativas educativas, formación y proyectos relacionados con Chanak International Academy / TrainUp Education.</p>

    <h2 style={h2Style}>4. Donaciones y pagos</h2>
    <p style={pStyle}>Cuando se habiliten donaciones o pagos, estos podrán ser procesados por Stripe. Chanak no debe solicitar datos completos de tarjeta directamente fuera de los flujos seguros del proveedor de pagos.</p>

    <h2 style={h2Style}>5. Uso del sitio</h2>
    <p style={pStyle}>El usuario se compromete a utilizar el sitio de forma lícita, respetuosa y adecuada a su finalidad. No está permitido dañar, bloquear, sobrecargar o intentar acceder sin autorización a sistemas o datos del sitio.</p>

    <h2 style={h2Style}>6. Propiedad intelectual</h2>
    <p style={pStyle}>Los textos, marcas, logotipos, diseños, imágenes y contenidos del sitio pertenecen a sus respectivos titulares o se utilizan con autorización. Su reproducción no autorizada puede estar prohibida.</p>

    <h2 style={h2Style}>7. Responsabilidad</h2>
    <p style={pStyle}>La información publicada tiene carácter general e informativo. Los datos legales, fiscales o registrales pendientes se completarán cuando sean confirmados oficialmente.</p>

    <h2 style={h2Style}>8. Privacidad y cookies</h2>
    <p style={pStyle}>Consulta la <a href="/privacidad" style={linkStyle}>Política de privacidad</a> y la <a href="/cookies" style={linkStyle}>Política de cookies</a> para conocer cómo se tratan los datos y cómo se gestionan las preferencias de consentimiento.</p>
    <ContactBlock />
  </LegalLayout>;
}
