import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../context/Data';
import { Person } from '../types/Person';
import '../styles/mystyles.scss';
import { Modul } from './Modal';

interface Props {
  peopleTable: Person[];
}

export const PeopleInfo = () => {
  const { id } = useParams();

  const { peopleTable } = useContext(DataContext);
  const person = peopleTable.find((user) => id && user.id === +id);

  return (
    <>
      <div className="block">
        <nav className="pagination" role="navigation" aria-label="pagination">
          <Link to={`/people/${id}`} className="pagination-previous">
            Previous
          </Link>
          <Link to={`/people/${id}`} className="pagination-next">
            Next page
          </Link>
        </nav>
        <Modul />
        <div className="table-container">
          <table className="table table is-bordered is-striped is-hoverable is-narrow is-fullwidth ">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>street</th>
                <th>suite</th>
                <th>city</th>
                <th>zipcode</th>
                <th>lat</th>
                <th>lng</th>
                <th>phone</th>
                <th>website</th>
                <th>company name</th>
                <th>company catchPhrase</th>
                <th>company bs</th>
              </tr>
            </thead>
            <tbody>
              <td>{person?.id}</td>
              <td>{person?.name}</td>
              <td>{person?.username}</td>
              <td>{person?.email}</td>
              <td>{person?.address.street}</td>
              <td>{person?.address.suite}</td>
              <td>{person?.address.city}</td>
              <td>{person?.address.zipcode}</td>
              <td>{person?.address.geo.lat}</td>
              <td>{person?.address.geo.lng}</td>
              <td>{person?.phone}</td>
              <td>{person?.website}</td>
              <td>{person?.company.name}</td>
              <td>{person?.company.catchPhrase}</td>
              <td>{person?.company.bs}</td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
