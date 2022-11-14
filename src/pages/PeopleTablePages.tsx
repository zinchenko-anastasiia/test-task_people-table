import { useState } from 'react';
import { FilterPeople } from '../components/FilterPeople';
import { PeopleTable } from '../components/PeopleTable';
import { useSelector } from 'react-redux';
import { getFilteredPeopleSelector } from '../store/selectors';

export const PeopleTablePages = () => {
  const [query, setQuery] = useState('');

  const filteredPeople = useSelector(getFilteredPeopleSelector(query));

  return (
    <>
      <h1 className="title is-1 mt-1">People Page</h1>
      <FilterPeople query={query} setQuery={setQuery} />
      <PeopleTable people={filteredPeople} />
    </>
  );
};
