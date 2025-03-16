import { NextResponse } from "next/server"
interface Plan {
  name: string;
  price: number;
  duration: string;
  features: string[];
}

interface EmailData {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
}

async function sendEmail(data: EmailData) {
  try {
const sendgridApiKey = process.env.SENDGRID_API_KEY;

    if (!sendgridApiKey) {
      throw new Error("SendGrid API key not configured")
    }

    // IMPORTANT: This email address MUST be verified in your SendGrid account
    // Go to https://app.sendgrid.com/settings/sender_auth to verify a sender
    const verifiedSenderEmail = "syedmustafaali689@gmail.com" // Replace with your verified sender email

    // Create the email payload for SendGrid
    const payload = {
      personalizations: [
        {
          to: [{ email: "i221111@nu.edu.pk" }], // Replace with your admin email
          subject: `New Plan Subscription: ${data.plan.name}`,
        },
      ],
      from: {
        email: verifiedSenderEmail,
        name: "Camford Tutors",
      },
      content: [
        {
          type: "text/html",
          value: `
            <h1>New Plan Subscription</h1>
            <p><strong>Customer:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <h2>Plan Details</h2>
            <p><strong>Plan:</strong> ${data.plan.name}</p>
            <p><strong>Price:</strong> $${data.plan.price}${data.plan.duration}</p>
            <h3>Features:</h3>
            <ul>
              ${data.plan.features.map((feature: string) => `<li>${feature}</li>`).join("")}
            </ul>
          `,
        },
      ],
    }

    console.log("Sending email with SendGrid...")

    // Send the email using SendGrid API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sendgridApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("SendGrid API error response:", errorText)

      // Check for sender identity error
      if (errorText.includes("from address does not match a verified Sender Identity")) {
        throw new Error("Sender email not verified. Please verify your sender email in SendGrid dashboard.")
      }

      throw new Error(`SendGrid API error: ${response.status}`)
    }

    console.log("Email sent successfully!")
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log("Received form submission:", data)

    // Validate the required fields
    if (!data.name || !data.email || !data.phone || !data.plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send the email
    try {
      await sendEmail(data)
      return NextResponse.json({ success: true })
    } catch (error: unknown) {
  // Check if error is an object and has a message property
  if (typeof error === "object" && error !== null && "message" in error) {
    const errorMessage = (error as { message: string }).message;

    if (errorMessage.includes("Sender email not verified")) {
      return NextResponse.json({
        error: "Sender email not verified in SendGrid. Please verify your sender email before sending.",
      });
    }
  }

  // Handle other errors
  return NextResponse.json({ error: "An unknown error occurred." });
}

  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

