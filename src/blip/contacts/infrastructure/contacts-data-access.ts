import { BlipHttpResponseTemplate, BlipHttpResponseTemplateWithoutResource } from "@/blip/response-builder";
import { Contact } from "../contact";

export type BlipContactsResourceResponse = {
    total: number
    itemType: string,
    items: Contact[]
}

export interface ContactsDataAccess {
    getContacts(): Promise<BlipHttpResponseTemplate<BlipContactsResourceResponse>>
    getContact(): Promise<BlipHttpResponseTemplate<Contact>>
    addContact(): Promise<BlipHttpResponseTemplate<BlipHttpResponseTemplateWithoutResource>>
    updateContact(): Promise<BlipHttpResponseTemplate<BlipHttpResponseTemplateWithoutResource>>
}
export class ContactsDataAccessImpl implements ContactsDataAccess {
    constructor(){}
    async getContacts(): Promise<BlipHttpResponseTemplate<BlipContactsResourceResponse>> {
        throw new Error("Method not implemented.");
    }
    async getContact(): Promise<BlipHttpResponseTemplate<Contact>> {
        throw new Error("Method not implemented.");
    }
    async addContact(): Promise<BlipHttpResponseTemplate<BlipHttpResponseTemplateWithoutResource>> {
        throw new Error("Method not implemented.");
    }
    async updateContact(): Promise<BlipHttpResponseTemplate<BlipHttpResponseTemplateWithoutResource>> {
        throw new Error("Method not implemented.");
    }
  
}