import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/slicknav.css';
import './assets/css/colors/blue.css';
// import './assets/less/main.less';
import "./assets/fonts/font-awesome.min.css"
import "./assets/fonts/line-icons/line-icons.css"

import store from './redux/store';
import { Sidebar } from './components/Sidebar';
import Header from './components/header/Header';
import Footer from './components/Footer';

// const Products = lazy(() => import('./components/products/Products'));
import Products from './components/products/Products';
import User from './components/User';
import AddProduct from './components/products/AddProduct';
import CartPage from './components/cart/CartPage';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Header />
          <Sidebar />

          <Switch>
            <ToastProvider>
              {/* <Suspense fallback={<div>Loading Products...</div>}> */}
              <Route exact path="/" component={Products} />
              {/* </Suspense> */}
              {/* <Suspense fallback={<div>Loading User...</div>}> */}
              <Route path="/user" component={User} />
              {/* </Suspense> */}
              {/* <Suspense fallback={<div>Add product...</div>}> */}
              <Route path="/add-product" component={AddProduct} />
              {/* </Suspense> */}
              <Route path="/cart" component={CartPage} />
            </ToastProvider>
          </Switch>

        </Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
