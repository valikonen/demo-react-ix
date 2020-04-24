import React from 'react';

import img1 from '../assets/img/products/img-01.jpg';

const Products = () => {
    return (
      <section id="shop-collection">
        <div className="container">
            <h1 className="section-title">New Arrivals</h1>
            <hr className="lines" />
            <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src={img1} alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <span className="sticker new"><strong>NEW</strong></span>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Qui Ratione Volup</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$49.00</span>
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
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-02.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <span className="sticker discount"><strong>-40%</strong></span>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Eius Modi Tempo</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$59.00</span>
                    </div>
                    <div className="pull-right">
                        <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-03.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Quia Voluptas Sit</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$69.00 <del>$79.00</del></span>
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
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-04.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <span className="sticker sale"><strong>Sale</strong></span>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <span className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></span>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">An Tium Lores Eos</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$39.00</span>
                    </div>
                    <div className="pull-right">
                        <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="/src/assets/img/products/img-05.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <span className="sticker sale"><strong>Sale</strong></span>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Magni Dolores Eos</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$69.00</span>
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
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-06.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Natur Aut Odit Aut</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$39.00 <del>$79.00</del></span>
                    </div>
                    <div className="pull-right">
                        <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-07.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <span className="sticker new"><strong>NEW</strong></span>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Nisi Ut Aliqu</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$56.00</span>
                    </div>
                    <div className="pull-right">
                        <div className="reviews-icon">
                        <i className="i-color fa fa-star"></i>
                        <i className="i-color fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="shop-product">
                <div className="product-box">
                    <a href="/#"><img src="assets/img/products/img-08.jpg" alt="" /></a>
                    <div className="cart-overlay">
                    </div>
                    <div className="actions">
                    <div className="add-to-links">
                        <a href="/#" className="btn-cart"><i className="icon-basket"></i></a>
                        <a href="/#" className="btn-wish"><i className="icon-heart"></i></a>
                        <a className="btn-quickview md-trigger" data-modal="modal-3"><i className="icon-eye"></i></a>
                    </div>
                    </div>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a href="product-details.html">Beatae Vitae Dicta</a></h4>
                    <div className="align-items">
                    <div className="pull-left">
                        <span className="price">$79.00</span>
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
            </div>
        </div>
        </section>
    );
}

export default Products;
