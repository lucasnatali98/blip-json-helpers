export interface SignInController {
  signIn(): Promise<any>;
}
export class SignInControllerImpl implements SignInController {
  signIn(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
