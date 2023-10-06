import { InternalValidatorStatus } from "./InternalValidatorStatus";

export abstract class InternalValidator<T = any> {
    protected readonly validatorStatus: InternalValidatorStatus;

    protected options?: T;

    constructor(options?: T) {
        this.options = options;
        this.validatorStatus = new InternalValidatorStatus();
    }

    protected reset() {
        this.validatorStatus.reset();
    }

    public get errors() {
        return this.validatorStatus.errors;
    }

    public get name() {
        return this.constructor.name;
    }

    public get valid() {
        return this.validatorStatus.valid;
    }

    public get warnings() {
        return this.validatorStatus.warnings;
    }

    public validate(value: any): boolean {
        this.reset();
        this.validator(value);

        return this.validatorStatus.valid;
    }

    protected abstract validator(value: any): void;
}
