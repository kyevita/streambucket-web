import { TextValidator } from "./Text/TextValidator";

export interface RequiredLengthValidatorOptions {
    max?: number;
    min?: number;
}

export class RequiredLengthValidator extends TextValidator<RequiredLengthValidatorOptions> {
    protected validator(value: any): void {
        const { max, min } = this.options || {};

        this.validateMinimum(value, min);
        this.validateMaximum(value, max);
    }
}
