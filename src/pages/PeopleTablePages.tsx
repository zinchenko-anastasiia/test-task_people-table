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
import { getPeopleSelector } from '../stores/selectors';

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
  const dispatch = useDispatch();
  const people = useSelector(getPeopleSelector)

  // const { people, loading } = useAppSelector((state) => state.people);
  // useEffect(() => {
  //   dispatch(peopleActions.fetchUsers());
  // }, []);

  useEffect(() => {
    const loadPeopleFromServer = async () => {
      const peopleFromServer = await getPeople();

      dispatch(setPeopleAction(peopleFromServer))
    }
    
    loadPeopleFromServer();
  }, []);

  const filteredPeople = getFilteredPeople(people, query);

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
