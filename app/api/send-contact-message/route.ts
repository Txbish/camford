import { NextResponse } from "next/server";
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

async function sendContactEmail(data: ContactFormData) {
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const verifiedSenderEmail = "syedmustafaali689@gmail.com"; // Your verified sender

  if (!sendgridApiKey) throw new Error("SendGrid API key not configured");

  const payload = {
    personalizations: [
      {
        to: [{ email: "contact@camfordtutors.co.uk" }],
        subject: `New Contact Message from ${data.name}`,
      },
    ],
    from: {
      email: verifiedSenderEmail,
      name: "Camford Tutors Contact",
    },
    content: [
      {
        type: "text/html",
        value: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong><br/>${data.message}</p>
        `,
      },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sendgridApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SendGrid API error: ${errorText}`);
  }

  return { success: true };
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendContactEmail(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
