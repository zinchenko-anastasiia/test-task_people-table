import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../types/Person';
import { PeopleInfo } from './PeopleInfo';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => (
  <Link
    to={`/people/${person.id}`}
  >
    {person.name}
  </Link>
);
