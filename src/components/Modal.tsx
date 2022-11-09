import classNames from 'classnames';
import { useState } from 'react';

export const Modul = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <button
        className="js-modal-trigger button is-primary is-light"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        Open JS example modal
      </button>
      {isOpen && (
        <div
          className={classNames('modal', {
            'is-active': isOpen,
          })}
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button 
                className="delete" 
                aria-label="close"
                onClick={() => setIsOpen(false)}
                >
                </button>
            </header>
            <section className="modal-card-body"></section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
