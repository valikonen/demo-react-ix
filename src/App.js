import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/slicknav.css';
import './assets/css/colors/blue.css';

import store from './redux/store';

import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const Products = lazy(() => import('./components/products/Products'));
const Users = lazy(() => import('./components/Users'));

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Header />
          <Sidebar />
          
            <Switch>
              <Suspense fallback={<div>Loading Products...</div>}>
                <Route exact path="/" component={Products} />
              </Suspense>
              <Suspense fallback={<div>Loading Users...</div>}>
                <Route path="/users" component={Users} />
              </Suspense>
            </Switch>
         
        </Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
