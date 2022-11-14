import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setPeopleAction } from '../store/actions';
import { Person } from '../types/Person';

interface Props {
  person: Person;
  people: Person[];
  isOpenDeleteModal: boolean;
  setIsOpenDeleteModal: (value: boolean) => void;
}

export const DeleteModal: React.FC<Props> = ({
  people,
  person,
  isOpenDeleteModal,
  setIsOpenDeleteModal,
}) => {
  const dispatch = useDispatch();
  const remove = (id: number) => {
    dispatch(setPeopleAction(people.filter((person) => person.id !== id)));
  };
  return (
    <>
      {isOpenDeleteModal && (
        <div
          className={classNames('modal', {
            'is-active': isOpenDeleteModal,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpenDeleteModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <p className="has-text-weight-semibold is-size-5 has-text-danger">
                Are you sure you want to delete {person.name}?
              </p>

              <button
                className="button is-danger is-light mt-2"
                onClick={() => (remove(person.id), setIsOpenDeleteModal(false))}
              >
                Delete
              </button>

              <button
                className="button is-success is-light mt-2 ml-2"
                onClick={() => setIsOpenDeleteModal(false)}
              >
                Cansel
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
