import { Action } from '../types/Action';
import { ActionsType } from '../types/ActionsType';
import { Person } from '../types/Person';

export const setPeopleAction = (payload: Person[]): Action => ({
  type: ActionsType.SET_PEOPLE,
  payload,
});

export const addPersonAction = (payload: Person): Action => ({
  type: ActionsType.ADD_PERSON,
  payload,
});

export const setPersonAction = (payload: Person): Action => ({
  type: ActionsType.SELECT_PERSON,
  payload,
});
