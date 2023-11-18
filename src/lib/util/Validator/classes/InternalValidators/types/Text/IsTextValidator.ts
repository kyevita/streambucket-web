import { InternalValidator } from "../../InternalValidator";

export class IsTextValidator extends InternalValidator {
    protected validator(value: any): void {
        if (typeof value !== "string") {
            this.validatorStatus.addError(`Value expected to be a string`);
        }
    }
}
