import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { createProduct } from '../../redux/products/productsActions';

const AddProduct = () => {

  const [product, setProduct] = useState(() => {
    return {title: '', price: null, imgUrl: 'img-08.jpg' }
  });

  const dispatch = useDispatch();


  const onAddProduct = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
  }

  return (
    <form onSubmit={onAddProduct}>
      {JSON.stringify(product)}
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Product Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="Name input"
          onChange={e => setProduct({...product, title: e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Price</label>
        <input 
          type="number" 
          className="form-control" 
          id="formGroupExampleInput2" 
          placeholder="Price input"
          onChange={e => setProduct({...product, price: e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput3">Img Url:</label>
        <input 
          type="text" 
          className="form-control" 
          id="formGroupExampleInput3"
          value={product.imgUrl}
          onChange={e => setProduct({...product, imgUrl: e.target.value})} />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddProduct;