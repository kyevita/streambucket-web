import { TextValidator } from "./TextValidator";

export interface EmailValidatorOptions {
    min?: number;
    max?: number;
    domain?: string;
}

export class EmailValidator extends TextValidator<EmailValidatorOptions> {
    private EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    protected validator(value: string): void {
        const { min, max, domain } = this.options || {};
        if (!this.EMAIL_REGEX.test(value)) {
            this.validatorStatus.addError(`Value is not a valid email address`);
        }

        this.validateMinimum(value, min);
        this.validateMaximum(value, max);

        const [, emailDomain = ""] = value.split("@");

        if (domain && !emailDomain.includes(domain)) {
            this.validatorStatus.addError(
                `Value does not contain domain "${domain}"`,
            );
        }
    }
}
