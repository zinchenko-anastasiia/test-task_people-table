import { useEffect, useState } from 'react';
import { Person } from '../types/Person';
import { FilterPeople } from '../components/FilterPeople';
import { MessageBlock } from '../components/MessageBlock';
import { PeopleTable } from '../components/PeopleTable';
import * as peopleActions from '../store/slices/personSlicer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useAppSelector } from '../store/hook';

export function checkQuery(name: string, username: string, query: string) {
  return (
    name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
    username.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}

export function getFilteredPeople(people: Person[], query: string) {
  return people.filter((person) =>
    checkQuery(person.name, person.username, query),
  );
}

export const PeopleTablePages = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<any>();

  const { people, loading } = useAppSelector((state) => state.people);
  useEffect(() => {
    dispatch(peopleActions.fetchUsers());
  }, []);

  const filteredPeople = getFilteredPeople(people, query);

  return (
    <>
      <h1 className="title is-1 mt-1">People Page</h1>
      <FilterPeople query={query} setQuery={setQuery} />
      <PeopleTable people={filteredPeople}/>

      {loading && <MessageBlock loading={loading} peopleTable={filteredPeople} />}
    </>
  );
};
