import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/response-builder";
import { Contact } from "../contact";
import { HttpClient } from "@/shared/http-client";

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
export interface ContactsDataAccess {
  getContacts(): Promise<BlipHttpContactsResponse>;
  getContact(): Promise<BlipHttpContactResponse>;
  addContact(): Promise<BlipHttpContactResponseWithoutResource>;
  updateContact(): Promise<BlipHttpContactResponseWithoutResource>;
}
export class ContactsDataAccessImpl implements ContactsDataAccess {
  constructor(private readonly _httpClient: HttpClient) {}
  async getContacts(): Promise<BlipHttpContactsResponse> {
    try {
      return new BlipHttpResponseTemplateBuilder<BlipContactsResourceResponse>()
        .create()

        .build();
    } catch (error) {}
  }
  async getContact(): Promise<BlipHttpContactResponse> {
    try {
    } catch (error) {}
  }
  async addContact(): Promise<BlipHttpContactResponseWithoutResource> {
    try {
    } catch (error) {}
  }
  async updateContact(): Promise<BlipHttpContactResponseWithoutResource> {
    try {
    } catch (error) {}
  }
}
