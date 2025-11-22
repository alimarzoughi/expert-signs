import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    // ---- ADD THIS GUARD ----
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    // -------------------------

    const { name, email, phone, company, projectType, message } = await req.json()

    await resend.emails.send({
      from: "Expert Signs Website <info@expertsigns.com>",
      to: "info@expertsigns.com",
      replyTo: email,
      subject: `New Website Request from ${name}`,
      html: `
        <h2>Inquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
        <p><strong>Details:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error sending quote email:", error)
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    )
  }
}
