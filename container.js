import { eventTracking } from "./src/event-tracking";

export const container = (flow, config) => {
  return {
    event_tracking: (config) => eventTracking(flow, config),
    blacklist: (config) => () => {},
    contact_journey: (config) => () => {},
    ending_flow: (config) => () => {},
    tags: (config) => () => {},
    names: (config) => () => {},
    inactivity: (config) => () => {},
    mapping_flow: (config) => () => {},
    interactions: (config) => () => {},
  };
};
