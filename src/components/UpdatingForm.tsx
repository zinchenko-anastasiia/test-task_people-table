import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setPeopleAction } from '../stores/actions';
import { Person } from '../types/Person';
interface Props {
  setIsUpdated: (value: boolean) => void;
  id: number;
  people: Person[];
  setIsOpenChangeModal: (value: boolean) => void;
}

export const UpdatingForm: React.FC<Props> = ({ id, setIsUpdated, people, setIsOpenChangeModal }) => {
  const person = people.find((user) => id && user.id === id);
  const dispatch = useDispatch();

  if(!person){
    return <p>No selected person</p>
  }

  const [newName, setNewName] = useState(person.name);
  const [newUsername, setNewUsername] = useState(person.username);

  const newTodoField = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdated(true);
    
    dispatch(setPeopleAction(people.map(person=>{
      if(person.id===id){
        return ({
          ...person,
          name: newName,
          username: newUsername,
        })} 
          return person
      }
    )))

    setIsOpenChangeModal(false)
  }
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
        </footer>
      </form>
    </>
  );
};
