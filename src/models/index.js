// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Type = {
  "CAR": "CAR",
  "DRONE": "DRONE",
  "GPS": "GPS",
  "IOT": "IOT",
  "MICRO": "MICRO",
  "OTHER": "OTHER"
};

const { Note } = initSchema(schema);

export {
  Note,
  Type
};