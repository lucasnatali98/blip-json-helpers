/**
 *
 *
 */

import { Flow } from "@/blip/flow/flow";
type ActionEnum = {
  HTTP: "http";
  SCRIPT: "script";
  EVENT_TRACKING: "event_tracking";
  CONTACT: "contact";
  REDIRECT: "redirect";
};

type TagsInfoMap = {
  colors: Map<ActionEnum, string>;
};
export interface Tags {
  input(tagsInfoMap: TagsInfoMap): Flow;
  remove(): Flow;
  update(tagsInfoMap: TagsInfoMap): Flow;
}

export class TagsImpl implements Tags {
  input(tagsInfoMap: any): Flow {
    throw new Error("Method not implemented.");
  }
  remove(): Flow {
    throw new Error("Method not implemented.");
  }
  update(tagsInfoMap: any): Flow {
    throw new Error("Method not implemented.");
  }
}
