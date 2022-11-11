import classNames from 'classnames';
import { UpdatingForm } from './UpdatingForm';

interface Props {
  isOpenn: boolean;
  setIsOpenn: (value: boolean) => void;
  id: number;
}

export const UpdateModal: React.FC<Props> = ({ isOpenn, setIsOpenn, id }) => {
  return (
    <>
      {isOpenn && (
        <div
          className={classNames('modal', {
            'is-active': isOpenn,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpenn(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <UpdatingForm id={id} />
            </section>
          </div>
        </div>
      )}
    </>
  );
};
