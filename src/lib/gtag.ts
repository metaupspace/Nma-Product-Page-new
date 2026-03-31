export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const isProduction = process.env.NODE_ENV === 'production';

export const pageview = (url: string) => {
  if (!isProduction || !GA_TRACKING_ID) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!isProduction || !GA_TRACKING_ID) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};