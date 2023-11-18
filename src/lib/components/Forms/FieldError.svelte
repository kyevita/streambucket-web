<script lang="ts">
    import type { Form } from "$lib/util/Validator/classes/Form";
    import { getContext } from "svelte";
    import { writable } from "svelte/store";

    export let fieldName: string;
    export let onFieldErrors: (errors: string[]) => void;
    export let showWarnings: boolean = false;

    let errors = writable<string[]>([]);
    const validator = getContext<SvelteStore<Form | undefined>>("validator");

    function shouldShowErrors(form: Form | undefined) {
        const field = form?.getField(fieldName);

        if (field && (!field.isOptional || showWarnings) && field.hasErrors) {
            $errors = field.errors;
        }

        onFieldErrors(field?.errors || []);
    }

    validator.subscribe((form: Form | undefined) => {
        $errors = [];
        shouldShowErrors(form);
    });
</script>

{#if $errors.length > 0}
    <ul class={$$restProps.class + " form-field-error"}>
        {#each $errors as error}
            <li>- {error}</li>
        {/each}
    </ul>
{/if}
