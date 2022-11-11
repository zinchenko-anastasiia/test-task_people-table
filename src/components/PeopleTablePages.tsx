import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Person } from '../types/Person';
import { FilterPeople } from './FilterPeople';
import { MessageBlock } from './MessageBlock';
import { PeopleTable } from './PeopleTable';
import * as peopleActions from '../store/slices/personSlicer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useAppSelector } from '../store/hook';

export function checkQuery(name: string, username: string, query: string) {
  return (
    name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
    username.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}

export function getFilteredPeople(peopleTable: Person[], query: string) {
  return peopleTable.filter((person) =>
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

  const { id } = useParams();

  const filteredPeople = getFilteredPeople(people, query);

  return (
    <>
      <h1 className="title">People Page</h1>
      <FilterPeople query={query} setQuery={setQuery} />
      <PeopleTable />

      {loading && (
        <MessageBlock
        loading={loading}
          peopleTable={people}
        />
      )}
    </>
  );
};
