import { TextValidator } from "./TextValidator";

export interface RequiredCharactersValidatorOptions {
    max?: number;
    min?: number;
    requiredCharacters?: string;
}

export class RequiredCharactersValidator extends TextValidator<RequiredCharactersValidatorOptions> {
    private SPECIAL_CHARACTERS_REGEX = /[^\w\s]/g;
    protected TYPE_TO_VALIDATE = "special characters";

    protected validator(value: any): void {
        const specialCharacters = this.extractByRegex(
            value,
            this.SPECIAL_CHARACTERS_REGEX,
        ).join("");
        const { max, min, requiredCharacters } = this.options || {};

        this.validateMinimum(specialCharacters, min);
        this.validateMaximum(specialCharacters, max);

        if (requiredCharacters) {
            const missingCharacters: string[] = [];
            const requiredCharactersArray = requiredCharacters.split("");

            for (const char of requiredCharactersArray) {
                const valid = specialCharacters.includes(char);

                if (!valid) {
                    missingCharacters.push(char);
                }
            }

            if (missingCharacters.length > 0) {
                this.validatorStatus.addError(
                    `Value does not contains the following special characters: ${missingCharacters.join(
                        ", ",
                    )}`,
                );
            }
        }
    }
}
