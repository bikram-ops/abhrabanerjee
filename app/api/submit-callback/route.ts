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

    // Store in Supabase
    const { error: dbError } = await supabase.from("callback_requests").insert([
      { name, email, phone, service }
    ]);

    if (dbError) {
      console.error("Supabase Insert Error:", dbError);
      return NextResponse.json({ error: "Database Error" }, { status: 500 });
    }

   // Customer Thank You Email
await resend.emails.send({
  from: "Abhra Banerjee <noreply@abhrabanerjee.com>",
  to: email,
  subject: "Thank You — We’ve Received Your Request",
  html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">

    <h2 style="color: #0A5EB0; margin-bottom: 8px;">Thank You!</h2>

    <p>Dear ${name},</p>

    <p>
      Your request has been successfully submitted on  
      <strong>AbhraBanerjee.com</strong>.  
      Our team will connect with you shortly.
    </p>

    <p style="margin-top: 12px;">
      Prefer choosing a specific time?<br>
      You may book a meeting directly using the link below:
    </p>

    <!-- ⭐ Book Meeting Button -->
    <div style="margin: 20px 0;">
      <a 
        href="https://calendly.com/abhra-banerjee"
        target="_blank"
        style="
          background-color: #0A5EB0;
          color: #fff;
          padding: 10px 18px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
        "
      >📅 Schedule a Meeting</a>
    </div>

    <!-- Logo -->
    <img 
      src="https://www.abhrabanerjee.com/logo.png"
      alt="Abhra Banerjee Logo"
      width="130"
      style="margin: 10px 0;"
    />

    <!-- Signature -->
    <p style="line-height: 1.5; margin-top: 10px;">
      <strong>Abhra Rajib Banerjee</strong><br>
      <strong>President & CEO</strong><br> 
      Cleanomatics, A Stadhawk Inc Brand<br>
      Fremont, California, Zip-94539, USA<br>
      Mobile <strong>(IN)</strong>- 9874917772 <strong>(US)</strong>- 5593584362<br>
      Email: abhra.banerjee@cleanomatics.com<br>
      Website: www.cleanomatics.com
    </p>

  </div>
  `,
});


    // INTERNAL Email to Abhra
await resend.emails.send({
  from: `"AbhraBanerjee.com Notifications" <noreply@abhrabanerjee.com>`,
  to: [
    "abhra.banerjee@cleanomatics.com",
    "abhra@abhrabanerjee.com",
    "bikram@cleanomatics.com"
  ],
  subject: "New Callback Request — AbhraBanerjee.com",
  html: `
    <div style="font-family: Arial; padding: 20px; color: #222;">
      <h2>New Callback Request Received</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>

      <br>
      <p>Regards,<br>Website System — AbhraBanerjee.com</p>
    </div>
  `,
});

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
