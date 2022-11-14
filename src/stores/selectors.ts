import { State } from '../types/State';

export const getPeopleSelector = (state: State) => state.people;

export const getPersonSelector = (state: State) => state.selectedPerson;
