import classNames from 'classnames';
import { UpdatingForm } from './UpdatingForm';

interface Props {
  isOpenChangeModul: boolean;
  setIsOpenChangeModul: (value: boolean) => void;
  id: number;
  setIsUpdated: (value: boolean) => void;
}

export const UpdateModal: React.FC<Props> = ({
  isOpenChangeModul,
  setIsOpenChangeModul,
  id,
  setIsUpdated,
}) => {
  return (
    <>
      {isOpenChangeModul && (
        <div
          className={classNames('modal', {
            'is-active': isOpenChangeModul,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpenChangeModul(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <UpdatingForm id={id} setIsUpdated={setIsUpdated}/>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
