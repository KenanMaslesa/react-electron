import React from 'react';
import SideBar from '../components/SideBar';
import Tabs from './Tabs';

const Main: React.FC = () => {
  return (
    <div className='main-wrapper'>
      <SideBar />
      <Tabs />
    </div>
  );
};

export default Main;
