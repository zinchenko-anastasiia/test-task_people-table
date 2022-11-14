import { useEffect, useState } from 'react';
import { Person } from '../types/Person';
import { FilterPeople } from '../components/FilterPeople';
import { MessageBlock } from '../components/MessageBlock';
import { PeopleTable } from '../components/PeopleTable';
import * as peopleActions from '../store/slices/personSlicer';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getPeople } from '../Api';
import { useDispatch } from 'react-redux';
import { setPeopleAction } from '../stores/actions';
import { useSelector } from 'react-redux';
import { getFilteredPeopleSelector, getPeopleSelector } from '../stores/selectors';

export const PeopleTablePages = () => {
  const [query, setQuery] = useState('');

  const filteredPeople = useSelector(getFilteredPeopleSelector(query));

  return (
    <>
      <h1 className="title is-1 mt-1">People Page</h1>
      <FilterPeople query={query} setQuery={setQuery} />
      <PeopleTable people={filteredPeople} />

      {/* {loading && (
        <MessageBlock loading={loading} peopleTable={filteredPeople} />
      )} */}
    </>
  );
};
