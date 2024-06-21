import { Flow } from "@/shared/flow";

export type Blacklist = {
  identity: string;
};
export type BlacklistOptions = {
  resource_name: string;
  router_id: string;
  router_key: string;
};

export function blacklist(
  flow: Flow,
  blacklist: Blacklist[],
  options: BlacklistOptions
) {
  try {
    const { resource_name, router_id, router_key } = options;
  } catch (error) {
    console.error(error);
    return error;
  }
}

const createResource = (payload) => {
  try {
    const { resource_name, router_id, router_key, contract_id } = payload;
    const url = ``;
    fetch("");
  } catch (error) {
    console.error(error);
    return error;
  }
};
