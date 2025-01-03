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
  if (window?.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
