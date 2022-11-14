import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPersonById } from '../Api';
import { setPersonAction } from '../stores/actions';
import { Person } from '../types/Person';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const dispatch = useDispatch();
  
  const getPerson = async (id: number) => {
    const personFromServer = await getPersonById(id);
  
    dispatch(setPersonAction(personFromServer));
  };
  return (
    <Link to={`/people/${person.id}`} onClick={() => getPerson(person.id)}>
      {person.name}
    </Link>
  );
};
