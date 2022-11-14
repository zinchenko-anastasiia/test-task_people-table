import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PageNavLink } from './components/PageNavLink';
import { PeopleInfo } from './pages/PeopleInfo';
import { PeopleTablePages } from './pages/PeopleTablePages';
import './styles/mystyles.scss';
import { getPeople } from './Api';
import { setPeopleAction } from './store/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadPeopleFromServer = async () => {
      const peopleFromServer = await getPeople();

      dispatch(setPeopleAction(peopleFromServer));
    };

    loadPeopleFromServer();
  }, []);
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <PageNavLink to="/" text="Home" end />
            <PageNavLink to="/people" text="People" />
          </div>
        </div>
      </nav>
      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="home" element={<Navigate to="/" replace />} />
            </Route>
            <Route path="/people">
              <Route index element={<PeopleTablePages />} />
              <Route path=":id" element={<PeopleInfo />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
