import CookiePreferencesButton from "../../components/CookiePreferencesButton";
import LegalPage, { Section, listStyle, paragraphStyle } from "../../components/LegalPage";

export const metadata = {
  title: "Política de Cookies | Chanak International Academy",
  description: "Información sobre el uso de cookies y configuración de consentimiento.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies">
      <Section title="Qué son las cookies">
        <p style={paragraphStyle}>Las cookies son pequeños archivos o tecnologías similares que se almacenan o leen en el dispositivo del usuario para permitir funciones técnicas, recordar preferencias o medir el uso de una web.</p>
      </Section>

      <Section title="Cookies técnicas o necesarias">
        <p style={paragraphStyle}>Son necesarias para el funcionamiento básico del sitio, la navegación, la seguridad y la conservación de preferencias esenciales. Estas cookies no requieren consentimiento porque son imprescindibles para prestar el servicio solicitado.</p>
      </Section>

      <Section title="Cookies de analítica y medición">
        <p style={paragraphStyle}>Pueden utilizarse para conocer cómo se visita la web, medir campañas y mejorar contenidos o experiencia de usuario. Solo se activan si el usuario acepta cookies.</p>
      </Section>

      <Section title="Cookies publicitarias y Google Ads">
        <p style={paragraphStyle}>Podrían utilizarse cookies o señales de Google Tag / Google Ads para medir conversiones publicitarias o mejorar la relevancia de campañas. Estas funciones solo deben activarse según el consentimiento otorgado por el usuario.</p>
      </Section>

      <Section title="Cómo gestionar el consentimiento">
        <p style={paragraphStyle}>Al acceder por primera vez, puedes aceptar, rechazar o configurar cookies desde el banner. Si aceptas, Google Tag actualizará el consentimiento a <code>analytics_storage=&quot;granted&quot;</code> y <code>ad_storage=&quot;granted&quot;</code>. Si rechazas, se mantiene <code>analytics_storage=&quot;denied&quot;</code> y <code>ad_storage=&quot;denied&quot;</code>.</p>
        <p style={paragraphStyle}>Puedes cambiar tu elección en cualquier momento desde este botón:</p>
        <CookiePreferencesButton />
      </Section>

      <Section title="Resumen de categorías">
        <ul style={listStyle}>
          <li>Técnicas/necesarias: funcionamiento básico, seguridad y preferencias esenciales.</li>
          <li>Analítica/medición: medición de visitas y rendimiento, solo con consentimiento.</li>
          <li>Publicidad/Google Ads: medición publicitaria o conversiones, solo con consentimiento.</li>
        </ul>
      </Section>
    </LegalPage>
  );
}
