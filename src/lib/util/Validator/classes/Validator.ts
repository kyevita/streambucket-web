import { Field } from "./Field";
import { Form } from "./Form";
import type { InternalValidator } from "./InternalValidators/InternalValidator";
import { OrValidator } from "./InternalValidators/conditionals/Or";
import { Text } from "./Types/Text";

export class Validator {
    public static get Text() {
        return Text;
    }

    public static form(id?: string) {
        return new Form(id);
    }

    public static field(id: string) {
        return new Field(id);
    }

    public static or(...validators: InternalValidator[]) {
        return new OrValidator(validators);
    }
}
