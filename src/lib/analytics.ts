export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined") {
    // Console log in development for verification
    if (process.env.NODE_NODE_ENV !== "production") {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
    
    // Support standard window.gtag or window.plausible if installed later
    const win = window as unknown as { gtag?: Function; plausible?: Function };
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, params);
    }
    if (typeof win.plausible === "function") {
      win.plausible(eventName, { props: params });
    }
  }
}
