import { BUSINESS_INFO } from "@/data/business";

/**
 * Creates a safe WhatsApp URL with encoded message
 */
export function createWhatsAppUrl(message?: string): string {
  if (!message) {
    return BUSINESS_INFO.whatsappBaseUrl;
  }
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an enquiry message for products/categories
 * Example: "Hello VASAN TECH, I am interested in Gaming Laptops. Please share available options."
 */
export function createProductEnquiryUrl(productName: string): string {
  const message = `Hello VASAN TECH, I am interested in ${productName}. Please share available options.`;
  return createWhatsAppUrl(message);
}

/**
 * Generates an enquiry message for service support
 */
export function createServiceEnquiryUrl(serviceName: string): string {
  const message = `Hello VASAN TECH, I need service/repair support for ${serviceName}. Please assist.`;
  return createWhatsAppUrl(message);
}
