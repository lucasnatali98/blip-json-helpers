import { HttpDataResponse } from "@/shared/http-data-response";
import { BlipHttpContactResponse } from "../infrastructure/contacts-data-access";
import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { Contact } from "../contact";

export interface BlipContactControler {
  getContacts(): Promise<HttpDataResponse<BlipHttpResponseTemplate<Contact[]>>>;
  add(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
  update(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>>;
  get(
    identity: string
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Contact>>>;
}
export class BlipContactControllerImpl implements BlipContactControler {
  async getContacts(): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<Contact[]>>
  > {
    throw new Error("Method not implemented.");
  }
  async add(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    throw new Error("Method not implemented.");
  }
  async update(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    throw new Error("Method not implemented.");
  }
  async get(
    identity: string
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Contact>>> {
    throw new Error("Method not implemented.");
  }
}
