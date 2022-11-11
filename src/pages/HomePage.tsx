import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="block">
      <h1 className="title is-1 mt-1">Home page</h1>
      <div className="buttons">
        <button className="button is-link is-light">
          <NavLink to="/people">Show table</NavLink>
        </button>
      </div>
      <div className="content is-medium">
        <h2 className="title is-2">About project</h2>
        <p className="subtitle pt-1">
          In this application you can work with a table of people
        </p>
        <h3 className="title is-3 pt-2">Basic functionality</h3>
        <ul>
          <li>
            You can search for people by name and username using the search bar.
          </li>
          <li>Delete and add new users.</li>
          <li>Update name and username.</li>
          <li>
            Refer to the link (by clicking on the name) to view detailed
            information.
          </li>
        </ul>
      </div>
    </div>
  );
};
