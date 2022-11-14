import classNames from 'classnames';
import { Form } from './Form';

interface Props {
  isOpenAddModal: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Modul: React.FC<Props> = ({ isOpenAddModal, setIsOpen }) => {

  return (
    <>
      {isOpenAddModal && (
        <div
          className={classNames('modal', {
            'is-active': isOpenAddModal,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setIsOpen(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <Form setIsOpen={setIsOpen}/>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
