import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications'
import { createProduct } from '../../redux/products/productsActions';

const AddProduct = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(() => {
    return { title: null, price: null, imgUrl: 'img-08.jpg', items_in_stock: null, category: 'Man' }
  });

  const onAddProduct = (e) => {
    e.preventDefault();

    if (isFormValid(product)) {
      dispatch(createProduct(product));
      addToast('Saved Successfully', { appearance: 'success', autoDismiss: true });
      resetForm(e);
    } else {
      addToast('Required Fields are Missing', { appearance: 'error' });
    }
  }

  const resetForm = (e) => {
    setProduct({ title: '', price: null, imgUrl: 'img-08.jpg', items_in_stock: '', category: 'Man' })
    e.target.elements.title.value = '';
    e.target.elements.price.value = null;
    e.target.elements.imgUrl.value = 'img-08.jpg';
    e.target.elements.category.value = 'Man';
    e.target.elements.items_in_stock = '';
  }

  const isFormValid = (product) => {
    return (product.imgUrl &&
      product.price &&
      product.title &&
      product.items_in_stock &&
      product.category)
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <form onSubmit={onAddProduct}>
            {JSON.stringify(product)}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={product.title}
                onChange={e => setProduct({ ...product, title: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Price"
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="items_in_stock">No. of items in stock</label>
              <input
                type="number"
                className="form-control"
                id="items_in_stock"
                placeholder="Stock"
                value={product.items_in_stock}
                onChange={e => setProduct({ ...product, items_in_stock: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Img Url:</label>
              <input
                type="text"
                className="form-control"
                id="imgUrl"
                value={product.imgUrl}
                onChange={e => setProduct({ ...product, imgUrl: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                value={product.category}
                onChange={e => setProduct({ ...product, category: e.target.value })}>
                <option id="0">Man</option>
                <option id="1">Woman</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary">Submit</button>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;