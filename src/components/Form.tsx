import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setPeopleAction } from '../store/actions';
import { getPeopleSelector } from '../store/selectors';

interface Props {
  setIsOpen: (value: boolean) => void;
}

export const Form: React.FC<Props> = ({ setIsOpen }) => {
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

  const dispatch = useDispatch();
  const people = useSelector(getPeopleSelector);

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
  const IsFullTextInput =
    name.trim().length > 0 &&
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    street.trim().length > 0 &&
    suite.trim().length > 0 &&
    city.trim().length > 0 &&
    zipcode.trim().length > 0 &&
    lat.trim().length > 0 &&
    lng.trim().length > 0 &&
    phone.trim().length > 0 &&
    website.trim().length > 0 &&
    companyName.trim().length > 0 &&
    catchPhrase.trim().length > 0 &&
    bs.trim().length > 0;

  const clear = () => {
    setName('');
    setUsername('');
    setEmail('');
    setStreet('');
    setSuite('');
    setCity('');
    setZipcode('');
    setLat('');
    setLng('');
    setPhone('');
    setWebsite('');
    setCompanyName('');
    setCatchPhrase('');
    setBs('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setPeopleAction([...people, newPerson()]));
    clear();
    setIsOpen(false);
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
                  className="input is-info"
                  type="text"
                  value={name}
                  required
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
                  className="input is-info"
                  type="text"
                  value={username}
                  required
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
              className="input is-info"
              type="email"
              value={email}
              required
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
              className="input is-info"
              type="text"
              placeholder=""
              value={street}
              required
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
              className="input is-info"
              type="text"
              placeholder=""
              value={suite}
              required
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
              className="input is-info"
              type="text"
              placeholder=""
              value={city}
              required
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
              className="input is-info"
              type="text"
              placeholder=""
              value={zipcode}
              required
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
                  className="input is-info"
                  type="text"
                  value={lat}
                  required
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
                  className="input is-info"
                  type="text"
                  value={lng}
                  required
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
              className="input is-info"
              type="text"
              value={phone}
              required
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
              className="input is-info"
              type="text"
              value={website}
              required
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
              className="input is-info"
              type="text"
              value={companyName}
              required
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
              className="input is-info"
              type="text"
              value={catchPhrase}
              required
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
              className="input is-info"
              type="text"
              value={bs}
              required
              onChange={(event) => {
                setBs(event.target.value);
              }}
            />
          </div>
        </div>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            type="submit"
            disabled={!IsFullTextInput}
          >
            Save
          </button>

          <div className="control">
            <button className="button is-danger" onClick={() => clear()}>
              Cancel
            </button>
          </div>
        </footer>
      </form>
    </>
  );
};
