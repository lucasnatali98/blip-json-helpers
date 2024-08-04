import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { Contact } from "../../contact";

export type BlipContactsResourceResponse = {
  total: number;
  itemType: string;
  items: Contact[];
};

export type BlipHttpContactsResponse =
  BlipHttpResponseTemplate<BlipContactsResourceResponse>;
export type BlipHttpContactResponse = BlipHttpResponseTemplate<Contact>;
export type BlipHttpContactResponseWithoutResource =
  BlipHttpResponseTemplateWithoutResource;

export type BlipContactsRequestDto = {
  $skip: number;
  $take: number;
  $filter: string;
};

export type BlipContactRequestDto = {
  identity: string;
};
