export default function LegalPage({ title, updatedAt = "[PENDIENTE DE COMPLETAR]", children }) {
  return (
    <main style={{ minHeight: "100vh", background: "#F7FAFC", color: "#132A4F", fontFamily: "DM Sans, sans-serif" }}>
      <section style={{ background: "linear-gradient(160deg,#132A4F 0%,#1A3A6B 75%,#20457D 100%)", color: "#fff", padding: "64px 5%" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <a href="/" style={{ color: "#D9B86F", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>← Volver al inicio</a>
          <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.1, margin: "18px 0 10px" }}>{title}</h1>
          <p style={{ margin: 0, color: "#DCE7FA", fontSize: "15px" }}>Última actualización: {updatedAt}</p>
        </div>
      </section>
      <section style={{ maxWidth: "980px", margin: "0 auto", padding: "48px 5% 80px" }}>
        <article style={{ background: "#fff", border: "1px solid #D7E3F5", borderRadius: "16px", padding: "clamp(22px,4vw,40px)", boxShadow: "0 14px 40px rgba(10,30,60,.08)" }}>
          {children}
        </article>
        <nav aria-label="Enlaces legales" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px", fontSize: "14px" }}>
          <a href="/privacidad" style={linkStyle}>Política de Privacidad</a>
          <a href="/cookies" style={linkStyle}>Política de Cookies</a>
          <a href="/aviso-legal" style={linkStyle}>Aviso Legal</a>
        </nav>
      </section>
    </main>
  );
}

export function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "28px" }}>
      <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "28px", color: "#1A3A6B", margin: "0 0 10px" }}>{title}</h2>
      <div style={{ fontSize: "16px", lineHeight: 1.75, color: "#2A4262" }}>{children}</div>
    </section>
  );
}

export const paragraphStyle = { margin: "0 0 12px" };
export const listStyle = { margin: 0, paddingLeft: "22px" };

const linkStyle = {
  color: "#1A3A6B",
  fontWeight: 700,
};
