import { type NextRequest, NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const issueType = formData.get("issueType") as string
    const subject = formData.get("subject") as string
    const body = formData.get("body") as string

    // Get all files
    const files: File[] = []
    let fileIndex = 0
    while (formData.get(`file_${fileIndex}`)) {
      const file = formData.get(`file_${fileIndex}`) as File
      files.push(file)
      fileIndex++
    }

    const issueTypeLabels: { [key: string]: string } = {
      technical: "Technical Issue",
      bug: "Bug Report",
      feature: "Feature Request",
      documentation: "Documentation Feedback",
      general: "General Inquiry",
      other: "Other",
    }

    // Import nodemailer dynamically for better performance
    const nodemailer = await import("nodemailer")

    // SendGrid SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "apikey", // This is always "apikey" for SendGrid
        pass: process.env.SMTP_PASS, // Your SendGrid API key
      },
    })

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer()
        return {
          filename: file.name,
          content: Buffer.from(buffer),
          contentType: file.type,
        }
      }),
    )

    // Create professional HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model HQ Support Request</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Model HQ Support Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New support ticket received</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            <!-- Customer Info -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #495057; font-size: 18px; font-weight: 600;">Customer Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6c757d; width: 120px;">Name:</td>
                        <td style="padding: 8px 0; color: #495057;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6c757d;">Email:</td>
                        <td style="padding: 8px 0; color: #495057;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6c757d;">Issue Type:</td>
                        <td style="padding: 8px 0;">
                            <span style="background: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
                                ${issueTypeLabels[issueType] || issueType}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #6c757d;">Subject:</td>
                        <td style="padding: 8px 0; color: #495057; font-weight: 600;">${subject}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Message -->
            <div style="margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 16px; font-weight: 600;">Message:</h3>
                <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 6px; padding: 20px; white-space: pre-wrap; line-height: 1.6; color: #495057;">${body}</div>
            </div>
            
            ${
              files.length > 0
                ? `
            <!-- Attachments -->
            <div style="margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 16px; font-weight: 600;">Attachments (${files.length}):</h3>
                <div style="background: #f8f9fa; border-radius: 6px; padding: 15px;">
                    ${files
                      .map(
                        (file) => `
                        <div style="display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                            <div style="background: #007bff; color: white; width: 32px; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: 600;">
                                📎
                            </div>
                            <div>
                                <div style="font-weight: 600; color: #495057; font-size: 14px;">${file.name}</div>
                                <div style="color: #6c757d; font-size: 12px;">${(file.size / 1024).toFixed(1)} KB</div>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            `
                : ""
            }
            
            <!-- Action Button -->
            <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">
                    Reply to Customer
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 12px;">
                This email was sent from the Model HQ Documentation support form.<br>
                Received on ${new Date().toLocaleString()}
            </p>
        </div>
    </div>
</body>
</html>
    `

    // Plain text version for email clients that don't support HTML
    const textContent = `
Model HQ Support Request

Customer Information:
Name: ${name}
Email: ${email}
Issue Type: ${issueTypeLabels[issueType] || issueType}
Subject: ${subject}

Message:
${body}

${files.length > 0 ? `Attachments: ${files.length} file(s) attached` : "No attachments"}

---
This email was sent from the Model HQ Documentation support form.
Received on ${new Date().toLocaleString()}
    `.trim()

    // Send email via SendGrid
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "rsharma@aibloks.com",
      to: "rsharma@aibloks.com", // Your email address
      subject: `[Model HQ Support] ${subject}`,
      text: textContent,
      html: htmlContent,
      replyTo: email, // Customer's email for easy replies
      attachments: attachments,
      // SendGrid specific headers
      headers: {
        "X-Priority": "1", // High priority
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    })

    console.log("Email sent successfully via SendGrid:", info.messageId)
    return NextResponse.json({
      success: true,
      message: "Support request sent successfully!",
    })
  } catch (error) {
    console.error("Error sending email via SendGrid:", error)

    // More detailed error logging for debugging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      })
    }

    return NextResponse.json(
      {
        error: "Failed to send support request. Please try again.",
      },
      { status: 500 },
    )
  }
}
