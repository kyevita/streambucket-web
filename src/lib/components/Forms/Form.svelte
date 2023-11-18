<script lang="ts">
    import type { Form } from "$lib/util/Validator/classes/Form";
    import type { EventHandler } from "svelte/elements";

    import "./styles/form.scss";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    type FormMethod = "POST" | "GET";
    type SubmitHanlder = EventHandler<SubmitEvent, HTMLFormElement>;

    export let onSubmit: SubmitHanlder | null = null;

    export let method: FormMethod = "POST";
    export let action: string = "";
    export let validator: Form | undefined = undefined;

    let validatorStore = writable<Form | undefined>(validator);

    setContext("validator", validatorStore);

    const _onSubmit: SubmitHanlder = (e) => {
        const formData = new FormData(e.currentTarget);
        const inputData = Array.from(formData.entries()).reduce(
            (prev, [key, value]) => ({ ...prev, [key]: value }),
            {}
        );

        validator?.validate(inputData);
        $validatorStore = validator;

        if (onSubmit) {
            onSubmit(e);
        }
    };
</script>

<form
    class="form-wrapper"
    {method}
    {action}
    on:submit|preventDefault={_onSubmit}
>
    <slot>
        <p>Empty Form...</p>
    </slot>
</form>
