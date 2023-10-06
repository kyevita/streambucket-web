import type { Field } from "./Field";
import { FormStatus } from "./FormStatus";

export interface InputFields {
    [k: string]: any;
}

interface FieldMapping {
    [k: string]: Field;
}

export class Form {
    private _id?: string;
    private _fieldMapping: FieldMapping;
    private _formStatus: FormStatus;

    constructor(id?: string) {
        this._id = id;
        this._fieldMapping = {};
        this._formStatus = new FormStatus();
    }

    public withFields(...fields: Field[]) {
        this._fieldMapping = fields.reduce(
            (prev, curr) => ({ ...prev, [curr.name]: curr }),
            {},
        );

        return this;
    }

    public validate(fields: InputFields): boolean {
        this._formStatus.reset();

        for (const [name, value] of Object.entries(fields)) {
            const validator = this._fieldMapping[name];

            if (!validator) {
                this._formStatus.addIgnoredField(name);
            } else if (validator.validate(value)) {
                this._formStatus.addSuccess(validator);
            } else {
                this._formStatus.addErrorField(validator);
                this._formStatus.setValid(false);
            }
        }

        return this._formStatus.valid;
    }

    public errorFields() {
        return this._formStatus.errors;
    }

    public validFields() {
        return this._formStatus.success;
    }

    public get valid() {
        return this._formStatus.valid;
    }

    public getField(name: string) {
        return this._fieldMapping[name];
    }
}
