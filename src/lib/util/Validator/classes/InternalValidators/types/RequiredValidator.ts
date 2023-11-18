import { InternalValidator } from "../InternalValidator";

export class RequiredValidator extends InternalValidator {
    protected validator(value: any): void {
        if (typeof value === "undefined" || value === null) {
            this.validatorStatus.addError(`Value is required`);
        }
    }
}
