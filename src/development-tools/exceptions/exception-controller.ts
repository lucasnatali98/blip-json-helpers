type ExceptionSummary = {
    exceptionCount: number
    exceptionTypes: string[]
    exceptionMessages: string[]
    exceptionStackTraces: string[]
}
export interface ExceptionController {
    summary(): Promise<ExceptionSummary>
}
export class ExceptionControllerImpl implements ExceptionController {
    summary(): Promise<ExceptionSummary> {
        throw new Error("Method not implemented.")
    }

}