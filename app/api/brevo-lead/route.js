export async function POST(request) {
  try {
    const body = await request.json();

    const {
      nombre = "",
      email = "",
      telefono = "",
      pais = "",
      nombreAlumno = "",
      gradoAlumno = "",
      intent = "",
      programa = "Off Campus",
      alumnos = "",
      origen = "Landing Off Campus Meta Ads",
    } = body;

    if (!nombre.trim()) {
      return Response.json({ success: false, message: "Nombre obligatorio." }, { status: 400 });
    }
    if (!telefono.trim()) {
      return Response.json({ success: false, message: "WhatsApp obligatorio." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: "Email obligatorio o inválido." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !listId) {
      return Response.json({ success: false, message: "Brevo no está configurado en Vercel." }, { status: 500 });
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "administration@chanakacademy.org";
    const senderName = process.env.BREVO_SENDER_NAME || "Chanak Academy";
    const now = new Date().toISOString();

    const internalEmailPayload = {
      sender: { email: senderEmail, name: senderName },
      to: [{ email: "offcampus@chanakacademy.org", name: "Off Campus" }],
      subject: "Nuevo lead Off Campus desde landing",
      htmlContent: `<p><strong>Nuevo lead Off Campus</strong></p>
<p><strong>Responsable:</strong></p>
<p><strong>Nombre:</strong> ${nombre}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>WhatsApp:</strong> ${telefono}</p>
<p><strong>País:</strong> ${pais || "-"}</p>
<br/>
<p><strong>Alumno:</strong></p>
<p><strong>Nombre del alumno:</strong> ${nombreAlumno || "-"}</p>
<p><strong>Grado/curso actual:</strong> ${gradoAlumno || "-"}</p>
<p><strong>Número de alumnos:</strong> ${alumnos || "-"}</p>
<br/>
<p><strong>Programa:</strong><br/>Off Campus</p>
<p><strong>Origen:</strong><br/>Landing Off Campus Meta Ads</p>
<p><strong>Intent:</strong> ${intent || "-"}</p>
<p><strong>Fecha/hora de solicitud:</strong> ${now}</p>
<p><strong>Nota:</strong><br/>Este lead llegó antes del pago o durante el intento de matrícula. Dar seguimiento aunque no complete Stripe.</p>`,
    };

    let brevoSaved = false;
    let brevoWarning = "";

    const fullPayload = {
      email,
      attributes: {
        NOMBRE: nombre || "",
        TELEFONO: telefono || "",
        PROGRAMA: programa || "Off Campus",
        ALUMNOS: alumnos || "",
        ORIGEN: origen || "Landing Off Campus Meta Ads",
        NOMBRE_ALUMNO: nombreAlumno || "",
        GRADO_ALUMNO: gradoAlumno || "",
        PAIS: pais || "",
        INTENT: intent || "",
      },
      listIds: [listId],
      updateEnabled: true,
    };

    const saveContact = async (payload) => {
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
        return { ok: false, status: response.status, error };
      }

      return { ok: true };
    };

    const fullResult = await saveContact(fullPayload);
    if (fullResult.ok) {
      brevoSaved = true;
    } else {
      const fallbackPayload = {
        email,
        attributes: {
          NOMBRE: nombre || "",
          TELEFONO: telefono || "",
          PROGRAMA: programa || "Off Campus",
          ALUMNOS: alumnos || "",
          ORIGEN: origen || "Landing Off Campus Meta Ads",
        },
        listIds: [listId],
        updateEnabled: true,
      };

      const fallbackResult = await saveContact(fallbackPayload);
      if (fallbackResult.ok) {
        brevoSaved = true;
        brevoWarning = "Contacto guardado en Brevo sin algunos atributos personalizados (NOMBRE_ALUMNO/GRADO_ALUMNO/PAIS/INTENT).";
      } else {
        brevoWarning = "No se pudo guardar el contacto en Brevo.";
      }
    }

    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(internalEmailPayload),
    });

    if (!emailRes.ok) {
      return Response.json(
        {
          success: brevoSaved,
          message: brevoSaved
            ? "Lead guardado en Brevo, pero la notificación interna falló."
            : "No se pudo guardar el lead en Brevo y también falló la notificación interna.",
          warning: true,
          brevoWarning,
        },
        { status: brevoSaved ? 200 : 502 }
      );
    }

    if (!brevoSaved) {
      return Response.json(
        {
          success: false,
          message: "No se pudo guardar el contacto en Brevo, pero sí se envió el email interno para seguimiento.",
          warning: true,
          brevoWarning,
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: brevoWarning ? "Lead guardado con advertencias y notificación enviada." : "Lead guardado y notificación enviada.",
      warning: Boolean(brevoWarning),
      brevoWarning,
    });
  } catch {
    return Response.json(
      { success: false, message: "Error interno al procesar el formulario." },
      { status: 500 }
    );
  }
}
