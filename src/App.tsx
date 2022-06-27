import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
import { HashRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Footer />
      <Main />
    </HashRouter>
  );
};

export default App;
