import { BlipAttendantControllerImpl } from "@/blip/attendant/controllers/blip-attendant-controller";
import { BlipAttendantDataAccessBuilder } from "@/blip/attendant/infrastructure/data/blip-attendant-data-access-builder";
import { BlipContactControllerImpl } from "@/blip/contacts/controllers/blip-contact-controller";
import { BlipContactDataAccessBuilder } from "@/blip/contacts/infrastructure/contact-data-access-builder";
import { BlipEventTrackingControllerImpl } from "@/blip/event-tracking/controllers/blip-event-tracking-controller";
import { BlipEventTrackingDataAccessBuilder } from "@/blip/event-tracking/infrastructure/data/event-tracking-data-access-builder";
import { BlipTeamsControllerImpl } from "@/blip/teams/controllers/blip-teams-controller";
import { BlipTeamsDataAccessBuilder } from "@/blip/teams/infrastructure/blip-teams-data-access-builder";
import { BlipTicketControllerImpl } from "@/blip/ticket/controllers/blip-ticket-controller";
import { BlipTicketDataAccessBuilder } from "@/blip/ticket/infrastructure/blip-ticket-data-access-builder";
import { CompanyName } from "@/core/domain/data/value-object/company";
import {
  ApplicationContext,
  applicationContexts,
} from "@/shared/application-context";

export const createContainerValue = (companyName: CompanyName) => {
  const createAuthenticationController = () => {};
  const createBlipAttendantController = () => {
    const blipAttendantDataAccess = new BlipAttendantDataAccessBuilder()
      .create()
      .build();
    return new BlipAttendantControllerImpl(blipAttendantDataAccess);
  };
  const createBlipContactController = () => {
    const blipContactDataAccess = new BlipContactDataAccessBuilder()
      .create()
      .build();
    return new BlipContactControllerImpl(blipContactDataAccess);
  };
  const createBlipEventTrackingController = () => {
    const blipEventTrackingDataAccess = new BlipEventTrackingDataAccessBuilder()
      .create()
      .build();

    return new BlipEventTrackingControllerImpl(blipEventTrackingDataAccess);
  };
  const createBlipTicketController = () => {
    const blipTicketDataAccess = new BlipTicketDataAccessBuilder()
      .create()
      .build();

    return new BlipTicketControllerImpl(blipTicketDataAccess);
  };
  const createBlipTeamsController = () => {
    const blipTeamsDataAccess = new BlipTeamsDataAccessBuilder()
      .create()
      .build();

    return new BlipTeamsControllerImpl(blipTeamsDataAccess);
  };

  return {
    authenticationController: () => {
      return createAuthenticationController();
    },
    blipAttendantController: () => {
      return createBlipAttendantController();
    },
    blipContactController: () => {
      return createBlipContactController();
    },
    blipEventTrackingController: () => {
      return createBlipEventTrackingController();
    },
    blipTicketController: () => {
      return createBlipTicketController();
    },
    createBlipTeamsController: () => {
      return createBlipTeamsController();
    },
  };
};

const container = applicationContexts
  .map((context: ApplicationContext) => {
    return {
      [context.company.name]: createContainerValue(context.company.name),
    };
  })
  .reduce((acc, curr) => ({ ...acc, ...curr }));

export default container;
