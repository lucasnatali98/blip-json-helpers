export type Ticket = {
    id: string
    sequentialId: number
    sequentialSuffix: string
    routingOwnerIdentity: unknown
    customerDomain: string
    agentIdentity: string
    provider: string
    status: TicketStatusEnum
    storageDate: string
    expirationDate: string
    openDate: string
    closeDate: string
    statusDate: string
    externalId: string
    rating: number
    team: string
    unreadMessages: number
    queuePosition: number
    closed: boolean
    closedBy: string
    tags: string[]
    averageAgentResponseTime: number
    firstResponseDate: string
    parentSequentialId: number
    customerInput: any //TODO: verificar o que é
    priority: number

}
export enum TicketStatusEnum {}
export const TicketMIMEType = "application/vnd.iris.ticket+json"
export const TicketMetricsSummaryMIMEType = "application/vnd.iris.desk.tickets-metrics-summary+json"
export const TicketsSummaryMIMEType = "application/vnd.iris.desk.ticketssummary+json"
export type TicketsMetricsSummary = {
    maxQueueTime: string
    maxFirstResponseTime: string
    avgQueueTime: string
    avgWaitTime: string
    avgResponseTime: string
    avgAttendanceTime: string
    ticketsPerAttendant: string
}
export type TicketsSummary = {
    date: string
    waiting: number
    open: number
    closed: number
    closedAttendant: number
    closedClient: number
    transferred: number
    missed: number
}

