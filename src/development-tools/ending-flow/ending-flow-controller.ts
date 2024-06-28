import { Flow } from "@/blip/flow/flow";

export interface EndingFlowController {
  endingFlow(flow: Flow): Promise<>;
}
