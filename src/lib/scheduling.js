const DEFAULT_APPDEPLOY_BOOKING_URL = "https://calendly.com/pradeepdahiya2411/30min";
const DEFAULT_AXOS_BOOKING_URL = "https://calendly.com/pradeepdahiya2411/axos-private-workspace-strategy-session";

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

const appDeployBookingUrl =
  process.env.NEXT_PUBLIC_APPDEPLOY_CALENDLY_URL ||
  process.env.NEXT_PUBLIC_CALENDLY_URL;
const googleSchedulingUrl = process.env.NEXT_PUBLIC_GOOGLE_SCHEDULING_URL;
const axosBookingUrl = process.env.NEXT_PUBLIC_AXOS_CALENDLY_URL;

export const meetingLinks = {
  appdeploy: isValidAbsoluteUrl(appDeployBookingUrl)
    ? appDeployBookingUrl
    : DEFAULT_APPDEPLOY_BOOKING_URL,
  google: isValidAbsoluteUrl(googleSchedulingUrl) ? googleSchedulingUrl : "",
  axos: isValidAbsoluteUrl(axosBookingUrl)
    ? axosBookingUrl
    : DEFAULT_AXOS_BOOKING_URL,
};

meetingLinks.calendly = meetingLinks.appdeploy;

export const hasGoogleScheduling = Boolean(meetingLinks.google);
