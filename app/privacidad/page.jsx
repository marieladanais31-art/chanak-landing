import LegalPage, { Section, listStyle, paragraphStyle } from "../../components/LegalPage";

export const metadata = {
  title: "Política de Privacidad | Chanak International Academy",
  description: "Información sobre el tratamiento de datos personales de Chanak International Academy.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <Section title="Responsable del tratamiento">
        <p style={paragraphStyle}>El responsable del tratamiento es Chanak International Academy / Chanak TrainUp Education Inc.</p>
        <p style={paragraphStyle}>Contacto: <a href="mailto:administration@chanakacademy.org">administration@chanakacademy.org</a>.</p>
        <p style={paragraphStyle}>Dirección fiscal o datos registrales adicionales: [PENDIENTE DE COMPLETAR].</p>
      </Section>

      <Section title="Finalidades del tratamiento">
        <ul style={listStyle}>
          <li>Responder solicitudes de información enviadas por usuarios y familias.</li>
          <li>Gestionar información académica y comercial relacionada con los programas educativos.</li>
          <li>Enviar comunicaciones solicitadas por el usuario.</li>
          <li>Medir campañas y mejorar la web, siempre según el consentimiento de cookies aplicable.</li>
        </ul>
      </Section>

      <Section title="Base legal">
        <p style={paragraphStyle}>La base legal principal es el consentimiento del usuario al enviar formularios, solicitar comunicaciones o aceptar cookies no necesarias.</p>
        <p style={paragraphStyle}>Cuando corresponda, también podrá aplicarse el interés legítimo para responder consultas, mantener la seguridad del sitio y mejorar servicios solicitados.</p>
      </Section>

      <Section title="Datos recogidos">
        <ul style={listStyle}>
          <li>Nombre, email, teléfono y país.</li>
          <li>Información académica o comercial enviada en formularios.</li>
          <li>Datos técnicos y cookies según la preferencia de consentimiento del usuario.</li>
        </ul>
      </Section>

      <Section title="Destinatarios y proveedores">
        <p style={paragraphStyle}>Podrán acceder a los datos los proveedores tecnológicos necesarios para prestar el servicio, como hosting, email, analítica, Google Ads / Google Tag y herramientas de formularios.</p>
        <p style={paragraphStyle}>Estos proveedores solo deben tratar los datos conforme a las finalidades indicadas y a las instrucciones aplicables.</p>
      </Section>

      <Section title="Transferencias internacionales">
        <p style={paragraphStyle}>Pueden existir transferencias internacionales por el uso de proveedores tecnológicos ubicados fuera del Espacio Económico Europeo.</p>
        <p style={paragraphStyle}>Cuando corresponda, se utilizarán garantías adecuadas conforme a la normativa aplicable, como cláusulas contractuales tipo u otros mecanismos reconocidos.</p>
      </Section>

      <Section title="Conservación">
        <p style={paragraphStyle}>Los datos se conservarán durante el tiempo necesario para atender la solicitud, gestionar la relación con el usuario y cumplir obligaciones legales aplicables.</p>
      </Section>

      <Section title="Derechos de las personas usuarias">
        <p style={paragraphStyle}>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad.</p>
        <p style={paragraphStyle}>Para ejercerlos, escribe a <a href="mailto:administration@chanakacademy.org">administration@chanakacademy.org</a>.</p>
        <p style={paragraphStyle}>También tienes derecho a presentar una reclamación ante la autoridad de control correspondiente si consideras que el tratamiento no se ajusta a la normativa aplicable.</p>
      </Section>
    </LegalPage>
  );
}
