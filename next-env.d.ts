/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
  // pageViewのため
  gtag(type: string, googleAnalyticsId: string, config: { page_path: string }): void

  // eventのため
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  ): void
}
