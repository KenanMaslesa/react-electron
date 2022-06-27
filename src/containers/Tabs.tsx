import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants';

const Tabs = () => {
  return (
    <div className='flex-grow-1'>
      <Routes>
        {ROUTES.map(({ path, element, navigateTo }) => (
          <Route
            key={path}
            path={path}
            element={navigateTo ? <Navigate to={navigateTo} replace /> : element}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Tabs;
