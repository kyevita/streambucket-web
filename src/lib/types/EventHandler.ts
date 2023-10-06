export type EventHandler = (
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
) => void;
