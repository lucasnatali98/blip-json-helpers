import { BlipHttpResponseTemplate } from "@/blip/blip-response-builder";
import { HttpDataResponse } from "@/shared/http-data-response";
import {
  BlipGetAllTeamsResponseResourceDto,
  BlipGetReportAboutTeamsRequestDto,
  BlipGetReportAboutTeamsResponseDto,
} from "../infrastructure/data/blip-teams-dto";
import logger from "@/shared/logger";
import { InternalError } from "@/shared/errors";
import { HttpDataResponseBuilder } from "@/shared/http-data-response-builder";
import { BlipTeamsDataAccess } from "../infrastructure/teams-data-access";

export interface BlipTeamsController {
  getAllTeams(): Promise<
    HttpDataResponse<
      BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
    >
  >;
  getReportAboutTeams(
    dto: BlipGetReportAboutTeamsRequestDto
  ): Promise<
    HttpDataResponse<
      BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
    >
  >;
}
export class BlipTeamsControllerImpl implements BlipTeamsController {
  constructor(private readonly _blipTeamsDataAccess: BlipTeamsDataAccess) {}
  async getReportAboutTeams(
    dto: BlipGetReportAboutTeamsRequestDto
  ): Promise<
    HttpDataResponse<
      BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
    >
  > {
    try {
      const response = await this._blipTeamsDataAccess.getReportAboutTeams(dto);

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
      >()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipGetReportAboutTeamsResponseDto>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
  async getAllTeams(): Promise<
    HttpDataResponse<
      BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
    >
  > {
    try {
      const response = await this._blipTeamsDataAccess.getAllTeams();

      if (response.status !== "success") {
        return new HttpDataResponseBuilder<
          BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
        >()
          .create()
          .withInfoErrorMessage([
            { message: "Houve um erro durante a extração" },
          ])
          .build();
      }
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
      >()
        .create()
        .withOkMessage(response)
        .build();
    } catch (error: any) {
      logger.error(error.stack);
      return new HttpDataResponseBuilder<
        BlipHttpResponseTemplate<BlipGetAllTeamsResponseResourceDto>
      >()
        .create()
        .withInternalErrorMessage([InternalError])
        .build();
    }
  }
}
