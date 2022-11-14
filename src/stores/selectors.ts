import { State } from '../types/State';

export const getPeopleSelector = (state: State) => state.people;

export const getPersonSelector = (state: State) => state.selectedPerson;

export const getFilteredPeopleSelector = (query: string) => {
  return (state: State) => {
    return state.people.filter(
      (person) =>
        person.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        person.username.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  };
};

