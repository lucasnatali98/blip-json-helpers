import z from "zod";
/**
 * Prototipos de adição de agentes (Atendentes)
 */
export const addAgentRequestSchema = z.object({
  identity: z.string(),
  teams: z.array(z.string()),
});
export type AddAgentRequestDto = z.infer<typeof addAgentRequestSchema>;

/**
 * Prototipos de report about agents
 */
export const getReportAboutAgentsRequestSchema = z.object({
  beginDate: z.string(),
  endDate: z.string(),
});

export type GetReportAboutAgentsDto = z.infer<
  typeof getReportAboutAgentsRequestSchema
>;

/**
 * Prototipos de get agents productivity
 */

export const getAgentsProductivityRequestSchema = z.object({
  beginDate: z.string(),
  endDate: z.string(),
});
export type GetAgentsProductivityRequestDto = z.infer<
  typeof getAgentsProductivityRequestSchema
>;

/**
 * Prototipos para obtenção de todos os agentes
 */
export const getAllBotAgentsRequestSchema = z.object({
  $take: z.number(),
  $skip: z.number(),
  $ascending: z.boolean(),
});
export type GetAllBotAgentsRequestDto = z.infer<
  typeof getAllBotAgentsRequestSchema
>;
