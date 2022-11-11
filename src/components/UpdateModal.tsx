import classNames, { Value } from 'classnames';
import { useState } from 'react';
import { Interface } from 'readline';
import { useAppSelector } from '../store/hook';
import { Form } from './Form';

interface Props {
  isOpenn: boolean;
  setIsOpenn: (value: boolean) => void;
}

export const UpdateModal: React.FC<Props> = ({ isOpenn, setIsOpenn }) => {
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
              <Form />
            </section>
          </div>
        </div>
      )}
    </>
  );
};