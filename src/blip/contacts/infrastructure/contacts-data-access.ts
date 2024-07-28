import {
  BlipHttpResponseTemplate,
  BlipHttpResponseTemplateBuilder,
  BlipHttpResponseTemplateWithoutResource,
} from "@/blip/blip-response-builder";
import { Contact } from "../contact";
import { HttpClient } from "@/shared/http-client";
import logger from "@/shared/logger";
import {
  BlipHttpContactResponse,
  BlipHttpContactResponseWithoutResource,
  BlipContactsResourceResponse,
  BlipContactsRequestDto,
  BlipContactRequestDto,
} from "./data/blip-contact-dto";
import { config } from "@/shared/config";

export interface BlipContactDataAccess {
  getContacts(
    dto: BlipContactsRequestDto
  ): Promise<BlipHttpResponseTemplate<BlipContactsResourceResponse>>;
  getContact(
    dto: BlipContactRequestDto
  ): Promise<BlipHttpResponseTemplate<Contact>>;
  addContact(dto: Contact): Promise<BlipHttpContactResponseWithoutResource>;
  updateContact(dto: Contact): Promise<BlipHttpContactResponseWithoutResource>;
}
export class BlipContactDataAccessImpl implements BlipContactDataAccess {
  private readonly _baseEndpoint;
  private readonly _authKey;
  constructor(private readonly _httpClient: HttpClient) {
    this._baseEndpoint = `${config.contract_id}/contacts`;
    this._authKey = `${config.router_key}`;
  }
  async getContacts(
    dto: BlipContactsRequestDto
  ): Promise<BlipHttpResponseTemplate<BlipContactsResourceResponse>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._authKey}`,
      };
      const response = await this._httpClient.post(url, { headers });

      return new BlipHttpResponseTemplateBuilder<BlipContactsResourceResponse>()
        .create()
        .withSuccess(true)
        .withResource({} as BlipContactsResourceResponse)
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<BlipContactsResourceResponse>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async getContact(
    dto: BlipContactRequestDto
  ): Promise<BlipHttpResponseTemplate<Contact>> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._authKey}`,
      };
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(true)
        .withResource({} as Contact)
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async addContact(
    dto: Contact
  ): Promise<BlipHttpContactResponseWithoutResource> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._authKey}`,
      };
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(true)
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
  async updateContact(
    dto: Contact
  ): Promise<BlipHttpContactResponseWithoutResource> {
    try {
      const url = `${this._baseEndpoint}/`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${this._authKey}`,
      };
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(true)
        .build();
    } catch (error: any) {
      logger.error(error?.stack);
      return new BlipHttpResponseTemplateBuilder<Contact>()
        .create()
        .withSuccess(false)
        .build();
    }
  }
}
