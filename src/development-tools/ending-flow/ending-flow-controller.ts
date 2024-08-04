import { Flow } from "@/blip/flow/flow";

type EndingFlowResponse = {
  blocksAffected: number
  hasError: boolean
}
export interface EndingFlowController {
  endingFlow(flow: Flow): Promise<EndingFlowResponse>;
}

export class EndingFlowControllerImpl {
  async endingFlow(flow: Flow): Promise<EndingFlowResponse> {
    // implementation
    return {} as EndingFlowResponse;
  }
}