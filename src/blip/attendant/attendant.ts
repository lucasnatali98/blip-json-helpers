export type AttendantTicketsSummary = {
    identity: string
    status: AttendantStatusEnum //TODO: Enum
}

export enum AttendantStatusEnum {
    OFFLINE = 0,
    PAUSE = 1,
    ONLINE = 2,
    INVISIBLE = 3
}
export const AttendantTicketsSummaryMIMEType = "application/vnd.iris.desk.attendantticketssummary+json"

export type AttendantMIMEType = "application/vnd.iris.desk.attendant+json"
export type Attendant = {
    identity: string
    fullName: string
    email: string
    teams: string[]
    status: AttendantStatusEnum
    lastServiceDate: string
    agentSlots: number
    attendantInService: number
}