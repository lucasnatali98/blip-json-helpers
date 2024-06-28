import { eventTracking } from "../blip/event-tracking/event-tracking";

export const container = (flow: any, config: any) => {
  return {
    event_tracking: (config: any) => eventTracking(flow, config),
    blacklist: (config: any) => () => {},
    contact_journey: (config: any) => () => {},
    ending_flow: (config: any) => () => {},
    tags: (config: any) => () => {},
    names: (config: any) => () => {},
    inactivity: (config: any) => () => {},
    mapping_flow: (config: any) => () => {},
    interactions: (config: any) => () => {},
  };
};
