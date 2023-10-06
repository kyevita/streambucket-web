import { InternalValidator } from "../../InternalValidator";

export class IsTextValidator extends InternalValidator {
    protected validator(value: any): void {
        if (typeof value !== "string") {
            this.validatorStatus.addError(
                `field value expected to be a string: ${value}`,
            );
        }
    }
}
