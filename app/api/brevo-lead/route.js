export async function POST(request) {
  try {
    const body = await request.json();

    const {
      nombre = "",
      email = "",
      telefono = "",
      programa = "Off Campus",
      alumnos = "",
      origen = "Landing Off Campus Meta Ads",
    } = body;

    if (!email || !email.includes("@")) {
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

    return Response.json({ success: true, message: "Lead guardado en Brevo." });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error interno al procesar el formulario." },
      { status: 500 }
    );
  }
}
