<script lang="ts">
    import type { Form } from "$lib/util/Validator/classes/Form";
    import { getContext } from "svelte";
    import { writable } from "svelte/store";

    export let fieldName: string;
    export let showWarnings: boolean = false;

    const validator = getContext<SvelteStore<Form | undefined>>("validator");

    let errors = writable<string[]>([]);

    function shouldShowErrors(form: Form | undefined) {
        const field = form?.getField(fieldName);

        if (field && (!field.isOptional || showWarnings) && field.hasErrors) {
            $errors = field.errors;
        }
    }

    validator.subscribe((value) => {
        $errors = [];
        shouldShowErrors(value);
    });
</script>

{#if $errors.length > 0}
    <ul class={$$restProps.class || ""}>
        {#each $errors as error}
            <li>{error}</li>
        {/each}
    </ul>
{/if}
