import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";

export type BlipCreateEventCategoryResource = {
  category: string;
  action: string;
};
export type CreateEventWithContactResponse = {
  category: string;
  action: string;
  contact: {
    identity: string;
  };
};
export type CreateEventRequestDto =
  BlipHttpResponseTemplate<BlipCreateEventCategoryResource>;

export type CreateEventWithContactRequestDto = Omit<
  BlipHttpResponseTemplate<CreateEventWithContactResponse>,
  "type"
>;

export type EventDetailResponse = {
  category: string;
  action: string;
  storageDate: string;
  extras: any;
};
export type GetEventDetailsResponse =
  BlipHttpResponseTemplate<EventDetailResponse>;
export type GetEventDetailsRequestDto = Omit<
  BlipHttpResponseTemplateWithoutResource,
  "type" | "from"
> & { uri: string };

export type Category = {
  category: string;
};
export type GetEventCategoriesResponse = {
  itemType: string;
  items: Category[];
};

export type EventCounters = {
  storageDate: string;
  category: string;
  action: string;
  count: number;
};

export type GetEventCountersResponse = {
  total: number;
  itemType: string;
  items: EventCounters[];
};
