import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/slicknav.css';
import './assets/css/colors/blue.css';

import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const Products = lazy(() => import('./components/Products'));
const Users = lazy(() => import('./components/Users'));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/users" component={Users} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
