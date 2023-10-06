<script lang="ts">
    import type { EventHandler } from "$lib/types/EventHandler";
    import type { ComponentProps } from "svelte";
    import FieldError from "./FieldError.svelte";

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

    export let onChange: EventHandler | null = null;
    export let onClick: EventHandler | null = null;
    export let fieldError:
        | string
        | boolean
        | Partial<ComponentProps<FieldError>>
        | null = null;

    export let name: string;
    export let id: string | null = null;
    export let value: string = "";
    export let type: InputType = "text";
</script>

<input {id} {type} {value} {name} on:change={onChange} on:click={onClick} />
{#if !!fieldError}
    <FieldError
        fieldName={name}
        class={typeof fieldError === "string" ? fieldError : ""}
        {...typeof fieldError === "object" && fieldError}
    />
{/if}
