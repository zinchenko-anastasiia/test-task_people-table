import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Modul } from './Modal';
import { UpdateModal } from './UpdateModal';
import { PersonLink } from './PersonLink';
import { Person } from '../types/Person';
import classNames from 'classnames';
import { setPeopleAction } from '../stores/actions';
import { DeleteModal } from './DeleteModal';

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const [isOpenAddModal, setIsOpen] = useState(false);
  const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const addClass = (person: Person) => isUpdated && currentId === person.id;
  return (
    <>
      <div className="buttons">
        <button
          className="js-modal-trigger button is-primary is-light mt-4"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          Add new
        </button>
      </div>
      <Modul isOpenAddModal={isOpenAddModal} setIsOpen={setIsOpen} />
      <UpdateModal
        isOpenChangeModal={isOpenChangeModal}
        setIsOpenChangeModal={setIsOpenChangeModal}
        id={currentId}
        setIsUpdated={setIsUpdated}
        people={people}
      />
      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        setIsOpenDeleteModal={setIsOpenDeleteModal}
        person={people[currentId]}
        people={people}
      />
      <table className="table is-striped is-hoverable is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>control</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <>
              <tr key={person.id}>
                <td
                  className={classNames({
                    'has-text-weight-bold': addClass(person),
                  })}
                >
                  {person.id}
                </td>
                <td
                  className={classNames({
                    'has-text-weight-bold': addClass(person),
                  })}
                >
                  <PersonLink person={person} />
                </td>
                <td
                  className={classNames({
                    'has-text-weight-bold': addClass(person),
                  })}
                >
                  {person.username}
                </td>
                <td>
                  <button
                    className="js-modal-trigger button is-danger is-light mr-2"
                    onClick={() => (
                      setCurrentId(person.id),
                      setIsOpenDeleteModal((prev: boolean) => !prev)
                    )}
                  >
                    delete
                  </button>
                  <button
                    className="js-modal-trigger button is-success is-light"
                    onClick={() => (
                      setIsOpenChangeModal((prev: boolean) => !prev),
                      setCurrentId(person.id)
                    )}
                  >
                    update
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
