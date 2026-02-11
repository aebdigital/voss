import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Meno, email a správa sú povinné." },
        { status: 400 }
      );
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    if (!apiKey) {
      console.error("SMTP2GO_API_KEY is not set");
      return NextResponse.json(
        { error: "Server chyba. Skúste neskôr." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        to: [process.env.CONTACT_EMAIL_TO || "info@vossautoservis.sk"],
        sender:
          process.env.CONTACT_EMAIL_FROM || "web@vossautoservis.sk",
        subject: `Nová správa z webu – ${name}`,
        html_body: `
          <h2>Nová správa z kontaktného formulára</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;">Meno:</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Telefón:</td><td style="padding:8px;">${phone || "–"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Správa:</td><td style="padding:8px;">${message}</td></tr>
          </table>
        `,
        text_body: `Meno: ${name}\nTelefón: ${phone || "–"}\nEmail: ${email}\nSpráva: ${message}`,
      }),
    });

    const data = await response.json();

    if (data.data?.succeeded > 0) {
      return NextResponse.json({ success: true });
    } else {
      console.error("SMTP2GO error:", JSON.stringify(data));
      const detail = data.data?.error || data.data?.failures?.[0] || JSON.stringify(data);
      return NextResponse.json(
        { error: "Nepodarilo sa odoslať správu. Skúste neskôr.", detail },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nastala chyba. Skúste neskôr." },
      { status: 500 }
    );
  }
}
