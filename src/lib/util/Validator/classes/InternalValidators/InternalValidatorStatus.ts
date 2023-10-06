export class InternalValidatorStatus {
    private _errors: string[];
    private _warnings: string[];
    private _valid: boolean;

    constructor() {
        this._errors = [];
        this._warnings = [];
        this._valid = true;
    }

    reset() {
        this._errors = [];
        this._warnings = [];
        this._valid = true;
    }

    public get errors() {
        return this._errors;
    }

    public get valid() {
        return this._valid;
    }

    public get warnings() {
        return this._warnings;
    }

    public set valid(valid: boolean) {
        this._valid = valid;
    }

    public addError(error: string) {
        this._valid = false;
        this._errors.push(error);
    }

    public addWarning(warning: string) {
        this._warnings.push(warning);
    }
}
