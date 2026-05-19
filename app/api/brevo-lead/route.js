export async function POST(request) {
  try {
    const body = await request.json();

    const {
      nombre = "",
      email = "",
      telefono = "",
      pais = "",
      programa = "Off Campus",
      alumnos = "",
      origen = "Landing Off Campus Meta Ads",
    } = body;

    if (!nombre.trim()) {
      return Response.json(
        { success: false, message: "Nombre obligatorio." },
        { status: 400 }
      );
    }
    if (!telefono.trim()) {
      return Response.json(
        { success: false, message: "WhatsApp obligatorio." },
        { status: 400 }
      );
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, message: "Email obligatorio o inválido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !listId) {
      return Response.json(
        { success: false, message: "Brevo no está configurado en Vercel." },
        { status: 500 }
      );
    }

    const payload = {
      email,
      attributes: {
        NOMBRE: nombre || "",
        TELEFONO: telefono || "",
        PAIS: pais || "",
        PROGRAMA: programa || "Off Campus",
        ALUMNOS: alumnos || "",
        ORIGEN: origen || "Landing Off Campus Meta Ads",
      },
      listIds: [listId],
      updateEnabled: true,
    };

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return Response.json(
        { success: false, message: "No se pudo guardar el contacto en Brevo.", error },
        { status: response.status }
      );
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "administration@chanakacademy.org";
    const senderName = process.env.BREVO_SENDER_NAME || "Chanak Academy";
    const now = new Date().toISOString();
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: "offcampus@chanakacademy.org", name: "Off Campus" }],
        subject: "Nuevo lead Off Campus desde landing",
        htmlContent: `<p><strong>Nuevo lead Off Campus</strong></p>
<p><strong>Nombre:</strong> ${nombre}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>WhatsApp:</strong> ${telefono}</p>
<p><strong>País:</strong> ${pais || "-"}</p>
<p><strong>Número de alumnos:</strong> ${alumnos || "-"}</p>
<p><strong>Programa:</strong> Off Campus</p>
<p><strong>Origen:</strong> Landing Off Campus Meta Ads</p>
<p><strong>Fecha/hora de solicitud:</strong> ${now}</p>
<p><em>Este lead llegó antes del pago o durante el intento de matrícula. Dar seguimiento aunque no complete Stripe.</em></p>`,
      }),
    });

    if (!emailRes.ok) {
      return Response.json({
        success: true,
        message: "Lead guardado en Brevo, pero la notificación interna falló.",
        warning: true,
      });
    }

    return Response.json({ success: true, message: "Lead guardado y notificación enviada." });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error interno al procesar el formulario." },
      { status: 500 }
    );
  }
}
