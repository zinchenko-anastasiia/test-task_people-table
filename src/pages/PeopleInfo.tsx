import { Link, useFetcher, useNavigate, useParams } from 'react-router-dom';
import '../styles/mystyles.scss';

import classNames from 'classnames';
import { useAppSelector } from '../store/hook';
import { getPersonSelector } from '../stores/selectors';
import { useSelector } from 'react-redux';

export const PeopleInfo = () => {
  const { id } = useParams();
  // const { people } = useAppSelector((state) => state.people);
  // const person = people.find((user) => id && user.id === +id);
  //@ts-ignore
  const person = useSelector(getPersonSelector);

  if (!person) {
    return <p>No selected person</p>;
  }

  console.log(person);

  // const currentPerson = person.id;

  return (
    <>
      <div className="block">
        <Link to="/people" className="button mb-4 mt-4 is-link is-outlined">
          back
        </Link>
        {/* <nav className="pagination" role="navigation" aria-label="pagination">
          <>
            <Link
              className={classNames('pagination-previous', {
                'is-disabled': currentPerson == 1,
              })}
              to={`/people/${
                currentPerson > 1 ? currentPerson - 1 : currentPerson
              }`}
            >
              previous
            </Link>
            <Link
              className={classNames('pagination-next', {
                'is-disabled': currentPerson === people.length,
              })}
              to={`/people/${
                currentPerson < people.length
                  ? currentPerson + 1
                  : currentPerson
              }`}
            >
              next
            </Link>
          </>
        </nav> */}

        <div className="table-container">
          <table className="table table is-bordered is-striped is-hoverable is-narrow is-fullwidth ">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>street</th>
                <th>suite</th>
                <th>city</th>
                <th>zipcode</th>
                <th>lat</th>
                <th>lng</th>
                <th>phone</th>
                <th>website</th>
                <th>company name</th>
                <th>company catchPhrase</th>
                <th>company bs</th>
              </tr>
            </thead>
            <tbody>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.address.street}</td>
              <td>{person.address.suite}</td>
              <td>{person.address.city}</td>
              <td>{person.address.zipcode}</td>
              <td>{person.address.geo.lat}</td>
              <td>{person.address.geo.lng}</td>
              <td>{person.phone}</td>
              <td>{person.website}</td>
              <td>{person.company.name}</td>
              <td>{person.company.catchPhrase}</td>
              <td>{person.company.bs}</td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
