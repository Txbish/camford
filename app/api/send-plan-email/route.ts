import { NextResponse } from "next/server"
interface Plan {
    unit: string;
  title: string;
  description: string;
  features: { label: string; price?: string }[];
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

    const verifiedSenderEmail = "syedmustafaali689@gmail.com" // Replace with your verified sender email

    const payload = {
  personalizations: [
    {
      to: [{ email: "contact@camfordtutors.co.uk" }], 
      subject: `New Plan Subscription: ${data.plan.title}`,
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
        <p><strong>Plan:</strong> ${data.plan.title}</p>
        <p><strong>Description:</strong> ${data.plan.description}</p>
        <h3>Features:</h3>
        <ul>
          ${data.plan.features.map((feature: { label: string; price?: string }) => 
            `<li><strong>${feature.label}:</strong> ${feature.price ? feature.price : "Price not available"}</li>`
          ).join('')}
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
      console.log(data);
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

