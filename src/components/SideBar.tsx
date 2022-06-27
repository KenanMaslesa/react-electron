import React from 'react';
import { SIDEBAR_OPTIONS } from '../constants';
import { useNavigate } from 'react-router-dom';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sidebar-wrapper'>
      {SIDEBAR_OPTIONS.map(({ icon, label, navigateTo }) => (
        <div
          key={label}
          className='sidebar-option-wrapper text-center cursor-pointer'
          onClick={() => navigate(navigateTo)}
        >
          <div>
            <img className='sidebar-option-icon' src={icon} />
          </div>
          <span className='sidebar-option-label'>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
