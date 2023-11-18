<script lang="ts">
    import type { EventHandler } from "$lib/types/EventHandler";
    import type { ComponentProps } from "svelte";
    import FieldError from "./FieldError.svelte";
    import { writable } from "svelte/store";

    type InputType =
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "month"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";

    export let fieldError:
        | string
        | boolean
        | Partial<ComponentProps<FieldError>>
        | null = null;
    export let id: string | null = null;
    export let name: string;
    export let onChange: EventHandler | null = null;
    export let onClick: EventHandler | null = null;
    export let placeholder: string | null = null;
    export let value: string = "";
    export let type: InputType = "text";

    const hasErrors = writable<boolean>(false);

    function onFieldErrors(errors: string[]) {
        $hasErrors = errors.length > 0;
        console.log($hasErrors);
    }
</script>

<input
    {id}
    {type}
    {value}
    {name}
    {placeholder}
    on:change={onChange}
    on:click={onClick}
    class={"form-input " + ($hasErrors ? "invalid" : "")}
/>
{#if !!fieldError}
    <FieldError
        {onFieldErrors}
        fieldName={name}
        class={typeof fieldError === "string" ? fieldError : ""}
        {...typeof fieldError === "object" && fieldError}
    />
{/if}
