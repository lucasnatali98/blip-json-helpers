import { BlipAttendantControllerImpl } from "@/blip/attendant/controllers/blip-attendant-controller";
import { BlipAttendantDataAccessBuilder } from "@/blip/attendant/infrastructure/data/blip-attendant-data-access-builder";
import { BlipContactControllerImpl } from "@/blip/contacts/controllers/blip-contact-controller";
import { BlipContactDataAccessBuilder } from "@/blip/contacts/infrastructure/contact-data-access-builder";

export const createContainerValue = (companyName: string) => {
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
  const createBlipEventTrackingController = () => {};
  const createBlipTicketController = () => {};
  const createBlipTeamsController = () => {};

  return {
    authenticationController: () => {
      createAuthenticationController();
    },
    blipAttendantController: () => {
      createBlipAttendantController();
    },
    blipContactController: () => {
      createBlipContactController();
    },
    blipEventTrackingController: () => {
      createBlipEventTrackingController();
    },
    blipTicketController: () => {
      createBlipTicketController();
    },
    createBlipTeamsController: () => {
      createBlipTeamsController();
    },
  };
};
