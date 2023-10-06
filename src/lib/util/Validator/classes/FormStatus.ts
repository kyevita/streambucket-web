import type { Field } from "./Field";

export class FormStatus {
    private _errors: Field[];
    private _ignoredFields: string[];
    private _success: Field[];
    private _valid: boolean;

    constructor() {
        this._errors = [];
        this._ignoredFields = [];
        this._success = [];
        this._valid = true;
    }

    addErrorField(field: Field) {
        this._errors.push(field);
    }

    addIgnoredField(name: string) {
        this._ignoredFields.push(name);
    }

    addSuccess(field: Field) {
        this._success.push(field);
    }

    reset() {
        this._errors = [];
        this._ignoredFields = [];
        this._success = [];
        this._valid = true;
    }

    setValid(valid: boolean) {
        this._valid = valid;
    }

    public get errors() {
        return this._errors;
    }

    public get ignoredFields() {
        return this._ignoredFields;
    }

    public get success() {
        return this._success;
    }

    public get valid() {
        return this._valid;
    }
}
