
export const metadata = { title: "Política de privacidad | Chanak Foundation", description: "Información sobre el tratamiento de datos personales en Chanak Foundation." };

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

export default function PrivacyPage() {
  return <LegalLayout title="Política de privacidad" intro="Esta política explica qué datos podemos recoger a través del sitio de Chanak Foundation y para qué los utilizamos.">
    <h2 style={{ ...h2Style, marginTop: 0 }}>1. Titular o responsable</h2>
    <p style={pStyle}>El titular o responsable del sitio es <strong>Chanak TrainUp Education Inc. / Chanak International Academy</strong> <strong>[PENDIENTE CONFIRMAR NOMBRE LEGAL EXACTO]</strong>.</p>
    <p style={pStyle}>Dirección física, identificadores fiscales y datos registrales: <strong>[PENDIENTE DE COMPLETAR]</strong>.</p>

    <h2 style={h2Style}>2. Finalidad del sitio</h2>
    <p style={pStyle}>Este sitio es informativo y de captación de donativos para apoyar programas educativos, becas, expansión de iniciativas educativas, formación y proyectos relacionados con Chanak International Academy / TrainUp Education.</p>

    <h2 style={h2Style}>3. Datos que podemos recoger</h2>
    <ul style={listStyle}>
      <li>Nombre, email, teléfono, país y mensaje enviados a través de formularios.</li>
      <li>Datos de donación o pago cuando el usuario decide donar, procesados a través de Stripe si aplica.</li>
      <li>Datos técnicos de navegación, identificadores online y cookies según la configuración de consentimiento del usuario.</li>
    </ul>

    <h2 style={h2Style}>4. Para qué usamos los datos</h2>
    <ul style={listStyle}>
      <li>Responder solicitudes de información y comunicaciones relacionadas con programas educativos o iniciativas de Chanak.</li>
      <li>Gestionar posibles donativos, justificantes, atención al donante y consultas administrativas.</li>
      <li>Mejorar el sitio y medir campañas únicamente cuando exista consentimiento para tecnologías de medición o publicidad.</li>
      <li>Cumplir obligaciones legales aplicables cuando corresponda.</li>
    </ul>

    <h2 style={h2Style}>5. Base jurídica y consentimiento</h2>
    <p style={pStyle}>Tratamos los datos que el usuario facilita voluntariamente para responder a su solicitud, gestionar su relación con Chanak y, cuando corresponda, cumplir obligaciones legales. Las cookies o tecnologías de publicidad y analítica no esenciales se activan solo según el consentimiento configurado por el usuario.</p>

    <h2 style={h2Style}>6. Proveedores y terceros</h2>
    <p style={pStyle}>Podemos utilizar proveedores tecnológicos para formularios, comunicaciones, alojamiento, medición y pagos. Stripe puede intervenir como proveedor de pagos si se habilitan donaciones. Google Ads / Google Tag pueden utilizarse para medición publicitaria; Google Analytics solo si está configurado o se activa más adelante y siempre conforme al consentimiento aplicable.</p>

    <h2 style={h2Style}>7. Conservación</h2>
    <p style={pStyle}>Conservaremos los datos durante el tiempo necesario para atender la solicitud, gestionar la relación con donantes o interesados, cumplir obligaciones legales y resolver posibles responsabilidades. Los plazos concretos internos se encuentran <strong>[PENDIENTE DE COMPLETAR]</strong>.</p>

    <h2 style={h2Style}>8. Derechos</h2>
    <p style={pStyle}>Puedes solicitar acceso, rectificación, eliminación, oposición, limitación o portabilidad de tus datos, cuando corresponda, escribiendo al email de contacto. También puedes retirar o modificar el consentimiento de cookies desde el banner o el panel de configuración.</p>

    <h2 style={h2Style}>9. Menores de edad</h2>
    <p style={pStyle}>Si un formulario incluye datos de estudiantes o menores, debe ser completado por su madre, padre, tutor legal o adulto responsable autorizado.</p>

    <h2 style={h2Style}>10. Cambios</h2>
    <p style={pStyle}>Podemos actualizar esta política para reflejar cambios legales, técnicos u operativos. La versión vigente será la publicada en esta página.</p>
    <ContactBlock />
  </LegalLayout>;
}
