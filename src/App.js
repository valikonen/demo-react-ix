import React from 'react';
import { Sidebar } from './components/Sidebar';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/slicknav.css';
import './assets/css/colors/blue.css';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Products />
      <Footer />
    </>
  );
}

export default App;
