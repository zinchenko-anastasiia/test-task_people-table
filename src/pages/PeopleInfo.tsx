import { Link, useFetcher, useNavigate, useParams } from 'react-router-dom';
import '../styles/mystyles.scss';

import classNames from 'classnames';
import { getPeopleSelector, getPersonSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonById } from '../Api';
import { setPersonAction } from '../store/actions';

export const PeopleInfo = () => {
  const { id } = useParams();

  if (!id) {
    return <p>No selected person</p>;
  }

  const person = useSelector(getPersonSelector(+id));
  const people = useSelector(getPeopleSelector);

  if (!person || !id) {
    return <p>No selected person</p>;
  }

  const dispatch = useDispatch();

  const getPerson = (id: number) => {
    const personFromServer = useSelector(getPersonSelector(+id));

    if (!personFromServer) {
      return <p>No selected person</p>;
    }

    dispatch(setPersonAction(personFromServer));
  };

  const nextUser = people
    .sort((p1, p2) => p1.id - p2.id)
    .find((person) => person.id > +id);

  const prevUser = [...people]
    .sort((p1, p2) => p2.id - p1.id)
    .find((person) => person.id < +id);

  let isLast = false;

  if (!nextUser) {
    isLast = true;
  }

  let isFirst = false;

  if (!prevUser) {
    isFirst = true;
  }

  return (
    <>
      <div className="block">
        <Link to="/people" className="button mb-4 mt-4 is-link is-outlined">
          back
        </Link>
        <nav className="pagination" role="navigation" aria-label="pagination">
          <>
            <Link
              className={classNames('pagination-previous', {
                'is-disabled': isFirst,
              })}
              to={`/people/${prevUser ? prevUser.id : id}`}
              onClick={() => prevUser && getPerson(prevUser.id)}
            >
              previous
            </Link>
            <Link
              className={classNames('pagination-next', {
                'is-disabled': isLast,
              })}
              to={`/people/${nextUser ? nextUser.id : id}`}
              onClick={() => nextUser && getPerson(nextUser.id)}
            >
              next
            </Link>
          </>
        </nav>

        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
