const CALENDLY_BOOKING_URL =
  "https://calendly.com/pradeepdahiya2411/axos-private-workspace-strategy-session";

const isValidAbsoluteUrl = (value) => {
  if (!value) {
    return false;
  }

  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
};

const googleSchedulingUrl = process.env.NEXT_PUBLIC_GOOGLE_SCHEDULING_URL;

export const meetingLinks = {
  appdeploy: CALENDLY_BOOKING_URL,
  google: isValidAbsoluteUrl(googleSchedulingUrl) ? googleSchedulingUrl : "",
  axos: CALENDLY_BOOKING_URL,
  calendly: CALENDLY_BOOKING_URL,
};

export const hasGoogleScheduling = Boolean(meetingLinks.google);
