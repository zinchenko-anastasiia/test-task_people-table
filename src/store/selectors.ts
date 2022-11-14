import { State } from '../types/State';

export const getPeopleSelector = (state: State) => state.people;

export const getFilteredPeopleSelector = (query: string) => {
  return (state: State) => {
    return state.people.filter(
      (person) =>
        person.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        person.username.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  };
};

export const getPersonSelector = (id: number) => {
  return (state: State) => {
    return state.people.find((person) => person.id === id);
  };
};
