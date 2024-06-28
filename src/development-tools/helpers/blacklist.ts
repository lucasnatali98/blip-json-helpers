import { Flow } from "@/blip/flow/flow";

export type BlacklistConfig = {
  resource_name: string;
  router_id: string;
  router_key: string;
};
export interface Blacklist {
  create(flow: Flow, users: string[]): Flow;
  remove(flow: Flow): Flow;
  removeUsers(users: string[]): Flow;
  addUsers(users: string[]): Flow;
}
export class BlacklistImpl implements Blacklist {
  constructor(private readonly _config: BlacklistConfig) {}
  create(flow: Flow, users: string[]): Flow {
    throw new Error("Method not implemented.");
  }
  remove(flow: Flow): Flow {
    throw new Error("Method not implemented.");
  }
  removeUsers(): Flow {
    throw new Error("Method not implemented.");
  }
  addUsers(): Flow {
    throw new Error("Method not implemented.");
  }
}
