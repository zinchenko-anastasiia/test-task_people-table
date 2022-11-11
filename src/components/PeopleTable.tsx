import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hook';
import { Modul } from './Modal';
import { UpdateModal } from './UpdateModal';
import { PersonLink } from './PersonLink';
import * as peopleActions from '../store/slices/personSlicer';
import { Person } from '../types/Person';
import { removePerson } from '../Api';
import classNames from 'classnames';

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const [isOpenAddModul, setIsOpen] = useState(false);
  const [isOpenChangeModul, setIsOpenChangeModul] = useState(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [isUpdated, setIsUpdated]=useState(false);
  const dispatch = useDispatch();

  const remove = useCallback(
    async (removeId: number) => {
      await removePerson(removeId);
      dispatch(peopleActions.remove(removeId));
    },
    [currentId],
  );

  const addClass = (person: Person) => isUpdated && currentId === person.id
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
      <Modul isOpenAddModul={isOpenAddModul} setIsOpen={setIsOpen} />
      <UpdateModal
        isOpenChangeModul={isOpenChangeModul}
        setIsOpenChangeModul={setIsOpenChangeModul}
        id={currentId}
        setIsUpdated={setIsUpdated}
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
                <td className={classNames({'has-text-weight-bold': addClass(person)})}>{person.id}</td>
                <td className={classNames({'has-text-weight-bold': addClass(person)})}>
                  <PersonLink person={person} />
                </td>
                <td className={classNames({'has-text-weight-bold': addClass(person)})}>{person.username}</td>
                <td>
                  <button
                    className="button is-danger is-light mr-2"
                    onClick={() => (setCurrentId(person.id), remove(person.id))}
                  >
                    delete
                  </button>
                  <button
                    className="js-modal-trigger button is-success is-light"
                    onClick={() => (
                      setIsOpenChangeModul((prev: boolean) => !prev),
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
