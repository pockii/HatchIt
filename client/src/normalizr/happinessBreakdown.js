import { normalize, schema } from 'normalizr';

const eventSchema = new schema.Entity(
    'events', {}, { idAttribute: value => value._id }
);

const happinessBreakdownSchema = new schema.Entity(
    'happinessBreakdown', { events: [eventSchema] }
)

export const normalizeHappinessBreakdown = happinessBreakdown => normalize(happinessBreakdown, happinessBreakdownSchema);