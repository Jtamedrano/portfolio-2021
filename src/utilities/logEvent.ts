declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const logEvent = (
  action: string,
  category: string,
  label: string,
  value: string
) => {
  const isProduction = process.env.NODE_ENV === "production";
  if (window?.gtag && isProduction) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
