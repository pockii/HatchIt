import { normalize, schema } from 'normalizr';

const petSchema = new schema.Entity(
    'pets', {}, { idAttribute: 'id' }
);

const userSchema = new schema.Entity(
    'user', { pets: [petSchema] }
)

export const normalizeUser = user => normalize(user, userSchema);