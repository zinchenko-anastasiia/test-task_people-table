import { NavLink } from 'react-router-dom';
import { PageNavLink } from './PageNavLink';

export const HomePage = () => {
  return (
    <div className="block">
      <h1 className="title">Home page</h1>
      <div className="buttons">
        <button className="button is-link is-light">
          <NavLink to="/people">Show table</NavLink>
        </button>
      </div>
    </div>
  );
};
