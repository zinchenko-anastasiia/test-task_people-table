import { Person } from './Person';

export type State = {
  people: Person[];
  selectedPerson: Person | null;
};
