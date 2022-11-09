import classNames from 'classnames';
import { Person } from '../types/Person';
import { PersonLink } from './PersonLink';

interface Props {
  peopleTable: Person[];
  personId?: string;
}
export const PeopleTable: React.FC<Props> = ({ peopleTable, personId }) => {
  const isActive = (person: Person) => personId && person.id === +personId;
  return (
    <table className="table is-striped is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        {peopleTable.map((person) => (
          <>
            <tr
              key={person.id}
              className={classNames({
                'has-background-warning': isActive(person),
              })}
            >
              <td>{person.id}</td>
              <td>
                <PersonLink person={person} />
              </td>
              <td>{person.username}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
