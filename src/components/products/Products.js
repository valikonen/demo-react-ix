import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/products/productsActions'
import ProductItem from './ProductItem';

const Products = ({products, getProducts}) => {
    // const [products, setProducts] = useState(props.products);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section id="shop-collection">
            
            <div className="container">
                <h1 className="section-title">New Arrivals</h1>
                <hr className="lines" />
                <div className="row">
                    
                    {   
                        products.productsItems && products.productsItems.map(product => (
                            <ProductItem key={product.id} productProp={product} />
                        ))
                    }
                    
            </div>
        </div>
        </section>
    );
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Products);
