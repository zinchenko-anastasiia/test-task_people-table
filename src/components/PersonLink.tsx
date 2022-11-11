import { Link } from 'react-router-dom';
import { Person } from '../types/Person';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => (
  <Link to={`/people/${person.id}`}>{person.name}</Link>
);
