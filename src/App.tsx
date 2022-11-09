import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { PageNavLink } from './components/PageNavLink';
import { PeopleInfo } from './components/PeopleInfo';
import { PeopleTablePages } from './components/PeopleTablePages';
import { DataProvider } from './context/Data';
import './styles/mystyles.scss';

export const App = () => {
  return (
    <DataProvider>
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
    </DataProvider>
  );
};
