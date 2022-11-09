import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeople } from '../Api';
import { DataContext } from '../context/Data';
import { Person } from '../types/Person';
import { FilterPeople } from './FilterPeople';
import { MessageBlock } from './MessageBlock';
import { PeopleTable } from './PeopleTable';

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
  const { peopleTable, isError, isLoading } = useContext(DataContext);

  const { id } = useParams();

  const filteredPeople = getFilteredPeople(peopleTable, query);

  return (
    <>
      <h1 className="title">People Page</h1>
      <FilterPeople query={query} setQuery={setQuery} />
      <PeopleTable peopleTable={filteredPeople} personId={id} />

      {(isError || isLoading) && (
        <MessageBlock
          isError={isError}
          isLoading={isLoading}
          peopleTable={peopleTable}
        />
      )}
    </>
  );
};
