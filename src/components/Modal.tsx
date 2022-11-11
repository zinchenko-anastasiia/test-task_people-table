import classNames, { Value } from 'classnames';
import { useRef, useState } from 'react';
import { Interface } from 'readline';
import { useAppSelector } from '../store/hook';
import { Form } from './Form';

interface Props {
  isOpenAddModul: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Modul: React.FC<Props> = ({ isOpenAddModul, setIsOpen }) => {
  const [newName, setNewTitle] = useState(name);

  const newTodoField = useRef<HTMLInputElement>(null);

  return (
    <>
      {isOpenAddModul && (
        <div
          className={classNames('modal', {
            'is-active': isOpenAddModul,
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
              <Form />
            </section>
          </div>
        </div>
      )}
    </>
  );
};
