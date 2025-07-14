import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
import { Ajax } from "@newrelic/browser-agent/features/ajax";
import { JSErrors } from "@newrelic/browser-agent/features/jserrors";
import { Metrics } from "@newrelic/browser-agent/features/metrics";
import { GenericEvents } from "@newrelic/browser-agent/features/generic_events";
import { PageViewEvent } from "@newrelic/browser-agent/features/page_view_event";
import { PageViewTiming } from "@newrelic/browser-agent/features/page_view_timing";
import { SessionTrace } from "@newrelic/browser-agent/features/session_trace";
import { Spa } from "@newrelic/browser-agent/features/spa";
import { Logging } from '@newrelic/browser-agent/features/logging'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const agent = new BrowserAgent({
    loader_config: {
      licenseKey: config.public.newRelicLicenseKey,
      applicationID: config.public.newRelicAppId,
    },
    info: {
      beacon: 'bam.nr-data.net',
      errorBeacon: 'bam.nr-data.net',
      licenseKey: config.public.newRelicLicenseKey,
      applicationID: config.public.newRelicAppId,
      sa: 1
    },
    features: [
      Ajax,
      JSErrors,
      Metrics,
      GenericEvents,
      PageViewEvent,
      PageViewTiming,
      SessionTrace,
      Spa,
      Logging
    ]
  })

  return {
    provide: {
      newRelic: agent
    }
  }
})
