import LegalPage, { Section, listStyle, paragraphStyle } from "../../components/LegalPage";

export const metadata = {
  title: "Aviso Legal | Chanak International Academy",
  description: "Condiciones generales de uso del sitio web de Chanak International Academy.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage title="Aviso Legal">
      <Section title="Titular del sitio">
        <p style={paragraphStyle}>El titular del sitio es Chanak International Academy / Chanak TrainUp Education Inc.</p>
        <p style={paragraphStyle}>Contacto: <a href="mailto:administration@chanakacademy.org">administration@chanakacademy.org</a>.</p>
        <p style={paragraphStyle}>Dirección física, identificación fiscal o datos registrales adicionales: [PENDIENTE DE COMPLETAR].</p>
      </Section>

      <Section title="Finalidad del sitio">
        <p style={paragraphStyle}>Este sitio ofrece información sobre programas educativos, diagnóstico académico, Dual Diploma, homeschool/off-campus y servicios relacionados.</p>
      </Section>

      <Section title="Condiciones de uso">
        <ul style={listStyle}>
          <li>La persona usuaria se compromete a utilizar el sitio de forma lícita, diligente y respetuosa.</li>
          <li>No se permite usar el sitio para actividades ilícitas, fraudulentas o que puedan dañar sistemas, contenidos o derechos de terceros.</li>
          <li>La información publicada tiene carácter informativo y puede actualizarse, corregirse o retirarse cuando sea necesario.</li>
        </ul>
      </Section>

      <Section title="Propiedad intelectual">
        <p style={paragraphStyle}>Los textos, marcas, diseños, imágenes y demás contenidos del sitio pertenecen a sus titulares respectivos o se utilizan con autorización o finalidad legítima.</p>
        <p style={paragraphStyle}>No se permite copiar, distribuir o transformar contenidos sin autorización previa, salvo en los casos permitidos por la normativa aplicable.</p>
      </Section>

      <Section title="Exclusión de responsabilidad">
        <p style={paragraphStyle}>Se procura mantener la información actualizada y disponible, pero no se garantiza la ausencia absoluta de errores, interrupciones o incidencias técnicas.</p>
        <p style={paragraphStyle}>Las decisiones académicas, administrativas o económicas deben confirmarse directamente con el equipo de Chanak antes de formalizar cualquier trámite.</p>
      </Section>

      <Section title="Enlaces externos">
        <p style={paragraphStyle}>El sitio puede incluir enlaces a páginas o servicios de terceros. Chanak no controla necesariamente dichos contenidos externos y no asume responsabilidad por sus políticas, disponibilidad o funcionamiento.</p>
      </Section>

      <Section title="Legislación aplicable">
        <p style={paragraphStyle}>El uso del sitio se interpretará conforme a la normativa aplicable en cada caso, sin establecer una jurisdicción específica mientras no esté confirmada de forma expresa.</p>
      </Section>
    </LegalPage>
  );
}
