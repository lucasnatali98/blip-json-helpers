import { HttpDataResponse } from "@/shared/http-data-response";
import { BlipHttpContactResponse } from "../infrastructure/contacts-data-access";
import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { Contact } from "../contact";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { InternalError } from "@/shared/errors";

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
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact[]>>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplate<Contact[]>)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact[]>>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async add(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async update(
    contact: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async get(
    identity: string
  ): Promise<HttpDataResponse<BlipHttpResponseTemplate<Contact>>> {
    try {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact>>()
        .create()
        .withOkMessage({} as BlipHttpResponseTemplate<Contact>)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact>>()
        .create()
        .withInfoErrorMessage([InternalError])
        .build();
    }
  }
}
