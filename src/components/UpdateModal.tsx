import classNames from 'classnames';
import { Person } from '../types/Person';
import { UpdatingForm } from './UpdatingForm';

interface Props {
  isOpenChangeModal: boolean;
  setIsOpenChangeModal: (value: boolean) => void;
  id: number;
  setIsUpdated: (value: boolean) => void;
  people: Person[];
  setUpdatedPeopleId:  React.Dispatch<React.SetStateAction<number[]>>
}

export const UpdateModal: React.FC<Props> = ({
  isOpenChangeModal,
  setIsOpenChangeModal,
  id,
  setIsUpdated,
  people,
  setUpdatedPeopleId,
}) => {
  return (
    <>
      {isOpenChangeModal && (
        <div
          className={classNames('modal', {
            'is-active': isOpenChangeModal,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpenChangeModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <UpdatingForm
                id={id}
                setIsUpdated={setIsUpdated}
                people={people}
                setIsOpenChangeModal={setIsOpenChangeModal}
                setUpdatedPeopleId={setUpdatedPeopleId}
              />
            </section>
          </div>
        </div>
      )}
    </>
  );
};
