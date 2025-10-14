export async function POST(req) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const { email } = await req.json();

    const response = await fetch(
      `https://us7.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    let data = {};
    try {
      data = await response.json();
    } catch {
       return Response.json(
        { success: false, message:"Something went wrong. Please try again." },
        { status: 400 }
      );
    }

    if (response.status >= 400) {
      if (data.title === "Member Exists") {
        return Response.json({ success: false, message: "You're already subscribed!" }, { status: 200 });
      }

      return Response.json(
        { success: false, message: data.detail || "Something went wrong. Please try again." },
        { status: 400 }
      );
    }

    return Response.json({ success: true, message: "Thank you for subscribing!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, message: "Server error." }, { status: 500 });
  }
}

