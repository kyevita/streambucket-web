import { Validator } from "$lib";

export default Validator.form().withFields(
    Validator.field("firstName").withValidators(
        Validator.Text.isText(),
        Validator.Text.requiredLength({ max: 14 }),
        Validator.Text.includeCharacters({
            min: 1,
            max: 14,
            requiredCharacters: "@*&",
        }),
        Validator.Text.includeNumbers({ min: 1 }),
    ),
    Validator.field("email")
        .withValidators(
            Validator.Text.isText(),
            Validator.Text.email({
                domain: "alexisdev.me",
            }),
        )
        .optional(),
    Validator.field("password").withValidators(
        Validator.or(
            Validator.Text.includeCharacters(),
            Validator.Text.includeNumbers(),
        ),
    ),
);
