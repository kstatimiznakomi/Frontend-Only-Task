export type YearEvents = {
    stage: number,
    years: string
    events: EventType[],
};

export type Events = Pick<YearEvents, "events">;

export type EventType = {
    year: number,
    event: string,
}