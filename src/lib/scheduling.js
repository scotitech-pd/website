/**
 * One booking link for every "Book a call" button: the founder's 30-minute
 * Strategy Call (founder's choice, 24 Nov 2026). It replaced the old
 * AXOS / AppDeploy session and a Vamiq demo link that no longer exists.
 */
const BOOKING_URL = "https://calendly.com/pradeepdahiya-scotitech/30min";

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
  vamiq: BOOKING_URL,
  google: isValidAbsoluteUrl(googleSchedulingUrl) ? googleSchedulingUrl : "",
  calendly: BOOKING_URL,
};

export const hasGoogleScheduling = Boolean(meetingLinks.google);
