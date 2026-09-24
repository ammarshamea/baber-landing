/**
 * Conversion tracking. Events go to window.dataLayer (Google Tag Manager / GA4)
 * and to gtag / plausible when present. Add a tag manager snippet to start collecting.
 *
 * Events: cta_primary, cta_secondary, whatsapp_click, language_switch, currency_switch,
 * pricing_view, pricing_period, demo_interaction, demo_complete, form_start, form_submit,
 * faq_open, scroll_depth, section_view.
 */
type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Payload }) => void;
  }
}

export function track(event: string, props: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props });
  window.gtag?.("event", event, props);
  window.plausible?.(event, { props });
}
