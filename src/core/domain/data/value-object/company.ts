export enum CompanyName {
  DEV = "dev",
  ORALDENTS = "oraldents",
}

export type CompanyContext = {
  id: string;
  name: CompanyName;
};
export const companyNameFromString = (company: string): CompanyName => {
  const companyName: CompanyName | undefined =
    CompanyName[company.toUpperCase() as keyof typeof CompanyName];
  if (!companyName) {
    throw new Error("Empresa inválida.");
  }
  return companyName;
};
