import { InternalValidator } from "../InternalValidator";

export interface OrInternalValidatorOptions {
    minMacth?: number;
}

export class OrValidator extends InternalValidator<OrInternalValidatorOptions> {
    private _valitators: InternalValidator[];

    constructor(
        validators: InternalValidator[],
        options?: OrInternalValidatorOptions,
    ) {
        super(options);
        this._valitators = validators;
    }

    protected validator(value: any) {
        const { minMacth = 1 } = this.options || {};
        const invalidValidators = [];

        for (const validator of this._valitators) {
            validator.validate(value);

            if (!validator.valid) {
                invalidValidators.push(validator);
            }
        }

        const validValidators =
            this._valitators.length - invalidValidators.length;

        if (validValidators < minMacth) {
            this.validatorStatus.addError(
                `Value does not match the minimum required conditions`,
            );
        }
    }

    public get validators() {
        return this._valitators;
    }
}
