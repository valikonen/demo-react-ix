import React from 'react';

const AddProduct = () => {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Product Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name input" />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Price</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price input" />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Url: "../../assets/img/products/img-08.jpg"</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example '../../assets/img/products/img-08.jpg'" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default AddProduct;