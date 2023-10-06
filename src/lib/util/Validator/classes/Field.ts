import { RequiredValidator } from "./InternalValidators/types/RequiredValidator";
import type { InternalValidator } from "./InternalValidators/InternalValidator";

export class Field {
    private _fieldName: string;
    private _required: boolean;
    private _internalValidators: InternalValidator[];
    private _errors: string[];
    private _stopOnError: boolean;

    constructor(fieldName: string) {
        this._fieldName = fieldName;
        this._required = true;
        this._internalValidators = [];
        this._errors = [];
        this._stopOnError = true;
    }

    private _setValidators(validators: InternalValidator[], replace = false) {
        this._internalValidators = [
            ...(replace ? [] : this._internalValidators),
            ...validators,
        ];
    }

    public withValidators(...validators: InternalValidator[]) {
        this._setValidators(validators);
        return this;
    }

    public optional() {
        this._required = false;
        this._stopOnError = false;
        return this;
    }

    public stopOnError(option: boolean) {
        this._stopOnError = option;
        return this;
    }

    public validate(value: any) {
        this._errors = [];
        let validators = this._internalValidators;

        if (this._required) {
            validators = [new RequiredValidator(), ...validators];
        }

        for (const validator of validators) {
            const result = validator.validate(value);

            if (result) {
                continue;
            }

            this._errors.push(...validator.errors);

            if (this._stopOnError) {
                return false;
            }
        }

        return true;
    }

    public get errors() {
        return this._errors;
    }

    public get hasErrors() {
        return this.errors.length > 0;
    }

    public get isOptional() {
        return !this._required;
    }

    public get name() {
        return this._fieldName;
    }
}
