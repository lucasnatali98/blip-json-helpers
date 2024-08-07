import {
  CompanyContext,
  CompanyName,
} from "@/core/domain/data/value-object/company";

export const COMPANY_DEV_ID = "1";
export const COMPANY_ORALDENTS_ID = "2";

export type ApplicationContext = {
  company: CompanyContext;
};
export const applicationContexts = [
  {
    company: {
      id: "1",
      name: CompanyName.DEV,
    },
  } as ApplicationContext,
];
