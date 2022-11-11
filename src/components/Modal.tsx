import classNames, { Value } from 'classnames';
import { useRef, useState } from 'react';
import { Interface } from 'readline';
import { useAppSelector } from '../store/hook';
import { Form } from './Form';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Modul: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [newName, setNewTitle] = useState(name);

  const newTodoField = useRef<HTMLInputElement>(null);

  return (
    <>
      {isOpen && (
        <div
          className={classNames('modal', {
            'is-active': isOpen,
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
