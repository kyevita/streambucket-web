import { InternalValidator } from "../../InternalValidator";

export abstract class TextValidator<T = any> extends InternalValidator<T> {
    protected TYPE_TO_VALIDATE: string = "characters";

    protected extractByRegex(value: string, regex: RegExp): string[] {
        return value.match(regex) || [];
    }

    protected validateMinimum(value: string, min?: number) {
        const valid = !min || value.length > min;

        if (!valid) {
            this.validatorStatus.addError(
                `field value does not meet the minimum required amount of ${this.TYPE_TO_VALIDATE}: ${min}`,
            );
        }

        return valid;
    }

    protected validateMaximum(value: string, max?: number) {
        const valid = !max || value.length < max;

        if (!valid) {
            this.validatorStatus.addError(
                `field value does not meet the maximum required amount of ${this.TYPE_TO_VALIDATE}: ${max}`,
            );
        }

        return valid;
    }
}
