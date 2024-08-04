import { HttpDataResponse } from "@/shared/http-data-response";
import { BlipContactDataAccess } from "../infrastructure/contacts-data-access";
import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { Contact } from "../contact";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { InternalError } from "@/shared/errors";
import {
  BlipContactsRequestDto,
  BlipContactsResourceResponse,
} from "../infrastructure/data/blip-contact-dto";

export interface BlipContactControler {
  getContacts(
    dto: BlipContactsRequestDto
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<BlipContactsResourceResponse>>
  >;
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
  constructor(private readonly _blipContactDataAccess: BlipContactDataAccess) {}
  async getContacts(
    dto: BlipContactsRequestDto
  ): Promise<
    HttpDataResponse<BlipHttpResponseTemplate<BlipContactsResourceResponse>>
  > {
    try {
      const contacts = await this._blipContactDataAccess.getContacts(dto);

      if (contacts.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<BlipContactsResourceResponse>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipContactsResourceResponse>
      >()
        .create()
        .withOkMessage(contacts)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipContactsResourceResponse>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async add(
    contactDto: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      const contact = await this._blipContactDataAccess.addContact(contactDto);

      if (contact.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage(contact as BlipHttpResponseTemplateWithoutResource)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async update(
    contactDto: Contact
  ): Promise<HttpDataResponse<BlipHttpResponseTemplateWithoutResource>> {
    try {
      const contact =
        await this._blipContactDataAccess.updateContact(contactDto);

      if (contact.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplateWithoutResource>()
        .create()
        .withOkMessage(contact as BlipHttpResponseTemplateWithoutResource)
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
      const contact = await this._blipContactDataAccess.getContact({
        identity,
      });

      if (contact.status !== "success") {
        return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact>>()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact>>()
        .create()
        .withOkMessage(contact as BlipHttpResponseTemplate<Contact>)
        .build();
    } catch (error: any) {
      return new HttpDataResponseBuilder<BlipHttpResponseTemplate<Contact>>()
        .create()
        .withInfoErrorMessage([InternalError])
        .build();
    }
  }
}
