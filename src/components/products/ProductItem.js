import React from 'react';

const ProductItem = ({ productProp }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="shop-product">
        <div className="product-box">
          <img alt="" src={require(`../../assets/img/products/${productProp.imgUrl}`)} />
          <div className="cart-overlay">
          </div>
          <span className="sticker new"><strong>NEW</strong></span>
          <div className="actions">
            <div className="add-to-links">
              <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
              <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
              {/* <a href="" className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a> */}
            </div>
          </div>
        </div>
        <div className="product-info">
          <h4 className="product-title"><a href="product-details.html">{productProp.title}</a></h4>
          <div className="align-items">
            <div className="pull-left">
              <span className="price">${productProp.price}</span>
            </div>
            <div className="pull-right">
              <div className="reviews-icon">
                <i className="i-color fa fa-star"></i>
                <i className="i-color fa fa-star"></i>
                <i className="i-color fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
