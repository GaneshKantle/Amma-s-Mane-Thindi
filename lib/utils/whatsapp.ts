import { BUSINESS, WHATSAPP_MESSAGES } from "@/lib/constants/business";

/**
 * Build a WhatsApp deep link (mobile + WhatsApp Web).
 * Message is URL-encoded.
 */
export function createWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

export function whatsappDefaultHref(): string {
  return createWhatsAppLink(WHATSAPP_MESSAGES.default);
}

export function whatsappFoodHref(): string {
  return createWhatsAppLink(WHATSAPP_MESSAGES.food);
}

export function whatsappFoodItemHref(name: string): string {
  return createWhatsAppLink(WHATSAPP_MESSAGES.foodItem(name));
}

export function whatsappBulkHref(): string {
  return createWhatsAppLink(WHATSAPP_MESSAGES.bulk);
}

export function whatsappTailoringHref(): string {
  return createWhatsAppLink(WHATSAPP_MESSAGES.tailoring);
}
