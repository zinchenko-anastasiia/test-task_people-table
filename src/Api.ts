import { Person } from './types/Person';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export function getPeople(): Promise<Person[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then((response) => response.json());
}

export function removePerson(id: number) {
  return wait(500)
    .then(() =>
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      }),
    )
    .then((response) => response.json());
}
