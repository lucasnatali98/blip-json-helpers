export type Contact = {
  identity: string
  name: string
  address: string
  city: string
  email: string
  phoneNumber: string
  photoUri: string
  cellPhoneNumber: string
  gender: string
  timezone: number
  extras: any
  isPending?: boolean //Determines if the contact is pending for acceptance by the roster owner
  sharePresence?: boolean 
  shareAccountInfo?: boolean
  group: boolean
  lastMessageDate: Date
  taxDocument: string
  source: string
};

export const ContactMIMEType = "application/vnd.lime.contact+json"