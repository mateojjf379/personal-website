import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Type {
  CAR = "CAR",
  DRONE = "DRONE",
  GPS = "GPS",
  IOT = "IOT",
  MICRO = "MICRO",
  OTHER = "OTHER"
}



type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly type: Type | keyof typeof Type;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}