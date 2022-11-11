import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useAppSelector } from '../store/hook';
import * as peopleActions from '../store/slices/personSlicer';
interface Props {
  id: number;
}

export const UpdatingForm: React.FC<Props> = ({ id }) => {
  const { people } = useAppSelector((state) => state.people);
  const person = people.find((user) => id && user.id === id);
  const dispatch = useDispatch<any>();

  const [newName, setNewName] = useState(person?.name);
  const [newUsername, setNewUsername] = useState(person?.username);

  const newTodoField = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(peopleActions.update({ person, newName, newUsername }));
  };
  return (
    <>
      <form className="modal-card-body" action="" onSubmit={handleSubmit}>
        <p className="subtitle is-5">Personal</p>
        <div className="field ">
          <div className="field-body">
            <div className="field">
              <label className="label">Name</label>
              <p className="control is-expanded ">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={newName}
                  ref={newTodoField}
                  onChange={(event) => setNewName(event.target.value)}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Username</label>
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  value={newUsername}
                  ref={newTodoField}
                  onChange={(event) => setNewUsername(event.target.value)}
                />
              </p>
            </div>
          </div>
        </div>
        <footer className="modal-card-foot">
          <button className="button is-success" type="submit">
            Save
          </button>
          <button className="button">Cancel</button>
        </footer>
      </form>
    </>
  );
};
