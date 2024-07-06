export type Command = {
    id: string
    from: string
    to: string
    uri: string
    method: string //TODO: Isso pode virar um enum
    type: string
    status: string
    reason: {
        code: number
        description: string
    }

}