import React from 'react';
import { helpIcon } from '../assets/img';
import { AUDINATE_WEBSITE_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <div className='header-wrapper d-flex align-items-center justify-content-space-between drag'>
      <img className='logo' alt='logo' />

      <div className='d-flex align-items-center justify-content-center'>
        <div
          className='no-drag cursor-pointer'
          onClick={() => window.electronAPI.openExternalUrl(AUDINATE_WEBSITE_LINK)}
        >
          <img src={helpIcon} alt='help icon' />
        </div>

        <div className='d-flex align-items-center justify-content-center no-drag'>
          <button
            className='btn btn__minimize'
            onClick={() => window.electronAPI.minimizeMainWindow()}
          />
          <button
            className='btn btn__maximize'
            onClick={() => window.electronAPI.maximizeMainWindow()}
          />
          <button className='btn btn__close' onClick={() => window.electronAPI.closeMainWindow()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
