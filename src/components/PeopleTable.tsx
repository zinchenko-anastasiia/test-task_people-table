import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hook';
import { Modul } from './Modal';
import { UpdateModal } from './UpdateModal';
import { PersonLink } from './PersonLink';
import * as peopleActions from '../store/slices/personSlicer';
import { Person } from '../types/Person';

interface Props {
  people: Person[]
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const dispatch = useDispatch<any>();

  const remove = (removeId: any) => dispatch(peopleActions.remove(removeId));

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
      <Modul isOpen={isOpen} setIsOpen={setIsOpen} />
      <UpdateModal isOpenn={isOpenn} setIsOpenn={setIsOpenn} id={currentId} />
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
                <td>{person.id}</td>
                <td>
                  <PersonLink person={person} />
                </td>
                <td>{person.username}</td>
                <td>
                  <button
                    className="button is-danger is-light mr-2"
                    onClick={() => remove(person.id)}
                  >
                    delete
                  </button>
                  <button
                    className="js-modal-trigger button is-success is-light"
                    onClick={() => (
                      setIsOpenn((prev: boolean) => !prev),
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
