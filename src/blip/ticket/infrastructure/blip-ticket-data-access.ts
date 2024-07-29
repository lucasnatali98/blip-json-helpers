import { HttpClient } from "@/shared/http-client";

export interface BlipTicketDataAccess {}
export class BlipTicketDataAccessImpl implements BlipTicketDataAccess {
  constructor(private readonly _httpClient: HttpClient) {}
}
