import React, { useEffect, useState } from 'react';
import { deviceIcon } from '../assets/img';

const Footer: React.FC = () => {
  const [hostName, setHostName] = useState<string>('');

  useEffect(() => {
    (async () => {
      const hostName = await window.electronAPI.getHostName();
      setHostName(hostName);
    })();
  }, []);

  return (
    <div className='footer-wrapper d-flex align-items-center'>
      <div className='device d-flex align-items-center'>
        <img src={deviceIcon} alt='device icon' className='device__icon' />
        <span className='device__user'>{hostName}</span>
      </div>
    </div>
  );
};

export default Footer;
