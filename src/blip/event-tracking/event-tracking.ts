export type EventTrackingPayload = {
  action: string;
  categoryName: string;
  newCategoryName: string;
  newAction: string;
  newCondition: string;
};

export type Event = {
  stripeSessionId: string;
  stripePaymentIntentId: string;
  stripeEventCode: string;
  reasonCode: string;
  reasonDescription: string;
  messageId: boolean;
  json: any;
};

export type EventTrack = {
  identity: string;
  contact: any;
  messageId: string;
  storageDate: string;
  value: number;
  category: string;
  action: string;
  label: string;
  extras: any;
  count: number;
};
