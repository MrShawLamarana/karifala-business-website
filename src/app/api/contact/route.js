import { NextResponse } from "next/server";

const requiredFields = ["fullName", "phoneNumber", "serviceRequired", "message"];

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const phoneNumber = typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
    const emailAddress = typeof body.emailAddress === "string" ? body.emailAddress.trim() : "";
    const serviceRequired = typeof body.serviceRequired === "string" ? body.serviceRequired.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";

    if (company) {
      return NextResponse.json(
        { message: "Your request could not be processed. Please try again using a different method." },
        { status: 400 }
      );
    }

    const missing = requiredFields.filter((field) => {
      if (field === "fullName") return !fullName;
      if (field === "phoneNumber") return !phoneNumber;
      if (field === "serviceRequired") return !serviceRequired;
      if (field === "message") return !message;
      return false;
    });

    if (missing.length > 0) {
      return NextResponse.json(
        { message: "Please complete the required fields before submitting the form." },
        { status: 400 }
      );
    }

    if (emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      return NextResponse.json(
        { message: "Please provide a valid email address or leave the field blank." },
        { status: 400 }
      );
    }

    const resendingApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendingApiKey || !contactEmail) {
      return NextResponse.json(
        {
          message:
            "Email sending is not configured yet. Please use WhatsApp or call directly to send your inquiry immediately.",
        },
        { status: 503 }
      );
    }

    const payload = {
      from: contactEmail,
      to: contactEmail,
      subject: `New service inquiry: ${serviceRequired}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${emailAddress || "Not provided"}</p>
        <p><strong>Service:</strong> ${serviceRequired}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendingApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          message:
            errorData.message ||
            "The email provider did not accept the request. Please use WhatsApp or call directly for immediate contact.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Your inquiry has been submitted successfully. Karifala will review it soon.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "A server error occurred while processing the inquiry. Please try again or contact by WhatsApp.",
      },
      { status: 500 }
    );
  }
}
