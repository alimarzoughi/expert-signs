import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
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
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 })
  }
}
