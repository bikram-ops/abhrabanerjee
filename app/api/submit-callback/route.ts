import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service } = await req.json();

    /* -----------------------------
       ✅ SERVER-SIDE VALIDATION
    ----------------------------- */
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!service || !service.trim()) {
      return NextResponse.json(
        { error: "Service field is required" },
        { status: 400 }
      );
    }

    /* -----------------------------
       ✅ STORE IN SUPABASE
    ----------------------------- */
    const { error: dbError } = await supabase
      .from("callback_requests")
      .insert([{ name, email, phone, service }]);

    if (dbError) {
      console.error("Supabase Insert Error:", dbError);
      return NextResponse.json(
        { error: "Database Error" },
        { status: 500 }
      );
    }

    /* -----------------------------
       📩 SEND CUSTOMER EMAIL
    ----------------------------- */
    await resend.emails.send({
      from: "Abhra Banerjee <noreply@abhrabanerjee.com>",
      to: email,
      subject: "Thank You — We’ve Received Your Request",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0A5EB0; margin-bottom: 8px;">Thank You!</h2>
          <p>Dear ${name},</p>
          <p>Your request has been successfully submitted on <strong>AbhraBanerjee.com</strong>. Our team will connect with you shortly.</p>
          <p style="margin-top: 12px;">Prefer choosing a specific time?<br>You may book a meeting directly below:</p>
          <div style="margin: 20px 0;">
            <a href="https://calendly.com/abhra-banerjee" target="_blank" style="background-color: #0A5EB0; color: #fff; padding: 10px 18px; border-radius: 6px; font-size: 14px; font-weight: bold; text-decoration: none; display: inline-block;">
              📅 Schedule a Meeting
            </a>
          </div>

          <img src="https://www.abhrabanerjee.com/logo.png" width="130" alt="Abhra Banerjee Logo"/>

          <p style="line-height: 1.5; margin-top: 10px;">
            <strong>Abhra Rajib Banerjee</strong><br>
            <strong>President & CEO</strong><br> 
            Cleanomatics, A Stadhawk Inc Brand<br>
            Fremont, California, USA<br>
            Mobile <strong>(IN)</strong>- 9874917772 <strong>(US)</strong>- 5593584362
          </p>
        </div>
      `,
    });

    /* -----------------------------
       📩 SEND INTERNAL EMAIL
    ----------------------------- */
    await resend.emails.send({
      from: `"AbhraBanerjee.com Notifications" <noreply@abhrabanerjee.com>`,
      to: [
        "abhra.banerjee@cleanomatics.com",
        "abhra@abhrabanerjee.com",
        "bikram@cleanomatics.com",
      ],
      subject: "New Callback Request — AbhraBanerjee.com",
     html: `
<div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

    <!-- Title Bar -->
    <tr>
      <td style="background:#0A5EB0; padding:22px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:20px; letter-spacing:0.4px;">
          🔔 New Callback Request Received
        </h1>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding:28px 32px; color:#333; font-size:15px; line-height:1.6;">
        
        <p style="margin-bottom:12px;">
          Hello Team,
        </p>

        <p style="margin-bottom:20px;">
          A new callback request has been submitted through  
          <strong>AbhraBanerjee.com</strong>.  
          Below are the details:
        </p>

        <!-- Details Card -->
        <div style="background:#f0f4ff; padding:18px; border-left:4px solid #0A5EB0; border-radius:8px; margin-bottom:20px;">
          <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin:6px 0;"><strong>Service:</strong> ${service}</p>
        </div>

        <p style="margin-top:12px;">
          Please contact the customer as soon as possible.
        </p>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#fafafa; padding:20px 15px; text-align:center; font-size:13px; color:#777; border-top:1px solid #eee;">
        
        <p style="margin:0 0 10px 0;">
          This is an automated notification from  
          <strong>AbhraBanerjee.com Website System</strong>.
        </p>

        <!-- Footer Logo -->
        <img 
          src="https://www.abhrabanerjee.com/logo.png"
          width="120"
          alt="Website Logo"
          style="margin-top:8px; opacity:0.8;"
        />

      </td>
    </tr>

  </table>
</div>
`,

    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}
