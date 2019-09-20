import { normalize, schema } from 'normalizr';


const bookSchema = new schema.Entity('books');

const bookListSchema = [bookSchema];

export const normalizeBooks = (data) => normalize(data, bookListSchema);
