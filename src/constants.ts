import { receiversTabIcon, transmittersTabIcon } from './assets/img';
import TransmittersTab from './components/TransmittersTab';
import ReceiversTab from './components/ReceiversTab';

export const AUDINATE_WEBSITE_LINK = 'https://www.audinate.com';

export const ROUTES = [
  {
    path: '/',
    navigateTo: '/transmitters',
  },
  {
    path: '/transmitters',
    element: TransmittersTab(),
  },
  {
    path: '/receivers',
    element: ReceiversTab(),
  },
];

export const SIDEBAR_OPTIONS = [
  {
    icon: transmittersTabIcon,
    label: 'Transmitters',
    navigateTo: '/transmitters',
  },
  {
    icon: receiversTabIcon,
    label: 'Receivers',
    navigateTo: '/receivers',
  },
];
