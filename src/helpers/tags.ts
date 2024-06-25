import { Flow } from "@/shared/flow";

/**
 *
 *
 */

type TagsColorMap = {
  action: string;
  color: string;
};
type TagsInfoMap = {
  colors: string[];
};
export interface Tags {
  input(tagsInfoMap: any): Flow;
  remove(tagsInfoMap: any): Flow;
  update(tagsInfoMap: any): Flow;
}

export class TagsImpl implements Tags {
  input(tagsInfoMap: any): Flow {
    throw new Error("Method not implemented.");
  }
  remove(tagsInfoMap: any): Flow {
    throw new Error("Method not implemented.");
  }
  update(tagsInfoMap: any): Flow {
    throw new Error("Method not implemented.");
  }
}
