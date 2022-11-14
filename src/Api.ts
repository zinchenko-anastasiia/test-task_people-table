import { Person } from './types/Person';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const getPeople = async (): Promise<Person[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const getPersonById = async (userId: number): Promise<Person> => {
  const response = await fetch(`${API_URL}/${userId}`);

  return response.json();
};
