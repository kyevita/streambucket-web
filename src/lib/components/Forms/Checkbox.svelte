<script lang="ts">
    import type { EventHandler } from "$lib/types/EventHandler";

    export let id: string | null = null;
    export let name: string | null = null;
    export let label: string | null = null;
    export let checked: boolean | null = null;

    export let onChange: EventHandler | null = null;
    export let onClick: EventHandler | null = null;
</script>

{#if label}
    <label for={id}>{label}</label>
{/if}

<input
    type="checkbox"
    {name}
    {id}
    {checked}
    on:change={onChange}
    on:click={onClick}
/>
