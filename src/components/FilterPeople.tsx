import React from 'react';

interface Props {
  setQuery: (value: string) => void;
  query: string;
}
export const FilterPeople: React.FC<Props> = ({ query, setQuery }) => {
  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);
  const handlerReset = () => setQuery('');
  return (
    <div className="mt-1">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handlerChangeInput}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query.length > 0 && (
            <button
              data-cy="clearSearchButton"
              type="button"
              aria-label="delete"
              className="delete"
              onClick={handlerReset}
            />
          )}
        </span>
      </p>
    </div>
  );
};
