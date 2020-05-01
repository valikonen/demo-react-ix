import React from 'react';
import CartItem from './CartItem';

const CartPage = () => {
  return (
    <section className="shopping-cart-area pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h3 className="title">Shopping Cart</h3>
              <p className="text pt-15">Shopping cart-Checkout-Order complete</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="shopping-table table-responsive mt-50">
              <table className="table">
                <thead className="thead-bg">
                  <tr>
                    <th className="product">Product</th>
                    <th className="price">Price</th>
                    <th className="quantity">Quantity</th>
                    <th className="total">Total</th>
                    <th className="remove">Close</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage;