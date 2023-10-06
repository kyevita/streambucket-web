import { TextValidator } from "./TextValidator";

export interface RequiredIncludeNumbersValidatorOptions {
    max?: number;
    min?: number;
}

export class RequiredIncludeNumbersValidator extends TextValidator<RequiredIncludeNumbersValidatorOptions> {
    private INT_REGEX = /-?\d+/g;
    protected TYPE_TO_VALIDATE = "special characters";

    protected validator(value: any): void {
        const numbers = this.extractByRegex(value, this.INT_REGEX).join("");
        const { max, min } = this.options || {};

        this.validateMaximum(numbers, min);
        this.validateMaximum(numbers, max);
    }
}
