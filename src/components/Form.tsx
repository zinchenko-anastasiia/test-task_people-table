import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useAppSelector } from '../store/hook';
import * as peopleActions from '../store/slices/personSlicer';

interface Props {
  name: string;
  setName: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  street: string;
  setStreet: (value: string) => void;
  suite: string;
  setSuite: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  zipcode: string;
  setZipcode: (value: string) => void;
  lat: string;
  setLat: (value: string) => void;
  lng: string;
  setLng: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  website: string;
  setWebsite: (value: string) => void;
  companyName: string;
  setCompanyName: (value: string) => void;
  catchPhrase: string;
  setCatchPhrase: (value: string) => void;
  bs: string;
  setBs: (value: string) => void;
}
export const Form = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [bs, setBs] = useState('');

  const dispatch = useDispatch<any>();

  const { people } = useAppSelector((state) => state.people);

  const newPerson = () => {
    return {
      id: Math.max.apply(null, [...people.map((person) => person.id)]) + 1,
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng,
        },
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase,
        bs,
      },
    };
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(peopleActions.add(newPerson()));
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
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
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
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>

        <p className="subtitle is-5">Address</p>
        <div className="field">
          <label className="label">Street</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              value={street}
              onChange={(event) => {
                setStreet(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Suite</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              value={suite}
              onChange={(event) => {
                setSuite(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">City</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Zipcode</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              value={zipcode}
              onChange={(event) => {
                setZipcode(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field ">
          <div className="field-body">
            <div className="field">
              <label className="label">Lat</label>
              <p className="control is-expanded ">
                <input
                  className="input"
                  type="text"
                  value={lat}
                  onChange={(event) => {
                    setLat(event.target.value);
                  }}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Lng</label>
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  value={lng}
                  onChange={(event) => {
                    setLng(event.target.value);
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        <p className="subtitle is-5">Contact</p>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Website</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={website}
              onChange={(event) => {
                setWebsite(event.target.value);
              }}
            />
          </div>
        </div>

        <p className="subtitle is-5">Company</p>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={companyName}
              onChange={(event) => {
                setCompanyName(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Catch Phrase</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={catchPhrase}
              onChange={(event) => {
                setCatchPhrase(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Bs</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={bs}
              onChange={(event) => {
                setBs(event.target.value);
              }}
            />
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
