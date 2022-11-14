import { ActionsType } from './ActionsType';
import { Person } from './Person';

export interface SetPersonAction {
  type: ActionsType.SELECT_PERSON;
  payload: Person;
}

export interface SetPeopeAction {
  type: ActionsType.SET_PEOPLE;
  payload: Person[];
}

export interface AddPersonAction {
  type: ActionsType.ADD_PERSON;
  payload: Person;
}

export type Action = SetPeopeAction | AddPersonAction | SetPersonAction;
