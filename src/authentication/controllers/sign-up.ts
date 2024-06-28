export interface SignUpController {
  signUp(): Promise<any>;
}
export class SignUpControllerImpl implements SignUpController {
  signUp(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
