import { BUSINESS_INFO } from "./constants";

export interface WhatsAppOptions {
  message?: string;
  source?: string;
  service?: string;
  location?: string;
}

export function createWhatsAppLink(options: WhatsAppOptions = {}): string {
  const { message, source, service, location } = options;

  let finalMessage = "";

  if (message) {
    finalMessage = message;
  } else if (service && location) {
    finalMessage = `Hi Samarth Cool, I need ${service} service. My location is ${location}.`;
  } else if (service) {
    finalMessage = `Hi Samarth Cool, I need ${service} service. Please let me know the next available slot.`;
  } else {
    finalMessage = `Hi Samarth Cool, I would like to enquire about your AC & refrigeration services.`;
  }

  // Append source tracking if present
  if (source && !finalMessage.includes("website")) {
    finalMessage += ` (Ref: website-${source})`;
  }

  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}

export const PREFILLED_MESSAGES = {
  hero: "Hi Samarth Cool, I found you through your website and need AC/refrigeration service. Please let me know the next available time.",
  acRepair: "Hi Samarth Cool, I found you through your website and need AC repair service.",
  acServicing: "Hi Samarth Cool, I found you through your website and need AC servicing.",
  acInstallation: "Hi Samarth Cool, I found you through your website and need AC installation support.",
  refrigerator: "Hi Samarth Cool, I found you through your website and need refrigerator repair service.",
  commercial: "Hi Samarth Cool, I found you through your website and need AC/refrigeration service for my commercial business space.",
  hotelStudio: "Hi Samarth Cool, I found you through your website and need AC/refrigeration service for a hotel/studio space.",
  general: "Hi Samarth Cool, I would like to enquire about your AC & refrigeration services.",
};
