import { IsTextValidator } from "../InternalValidators/types/Text/IsTextValidator";
import {
    RequiredLengthValidator,
    type RequiredLengthValidatorOptions,
} from "../InternalValidators/types/RequiredLengthValidator";
import {
    RequiredCharactersValidator,
    type RequiredCharactersValidatorOptions,
} from "../InternalValidators/types/Text/RequiredCharactersValidator";
import {
    RequiredIncludeNumbersValidator,
    type RequiredIncludeNumbersValidatorOptions,
} from "../InternalValidators/types/Text/RequiredIncludeNumbersValidator";
import {
    EmailValidator,
    type EmailValidatorOptions,
} from "../InternalValidators/types/Text/EmailValidator";

export type TextRequiredLenghtOptions = RequiredLengthValidatorOptions;
export type TextIncludeCharactersOptions = RequiredCharactersValidatorOptions;
export type TextIncludeNumbersOptions = RequiredIncludeNumbersValidatorOptions;
export type TextEmailOptions = EmailValidatorOptions;

export class Text {
    public static isText() {
        return new IsTextValidator();
    }

    public static requiredLength(options?: TextRequiredLenghtOptions) {
        return new RequiredLengthValidator(options);
    }

    public static includeCharacters(options?: TextIncludeCharactersOptions) {
        return new RequiredCharactersValidator(options);
    }

    public static includeNumbers(options?: TextIncludeNumbersOptions) {
        return new RequiredIncludeNumbersValidator(options);
    }

    public static email(options?: TextEmailOptions) {
        return new EmailValidator(options);
    }
}
