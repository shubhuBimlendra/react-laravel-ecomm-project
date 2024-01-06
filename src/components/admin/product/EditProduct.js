import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function EditProduct(props) {
  const history = useHistory();
  const [catgorylist, setCategorylist] = useState([]);
  const [productInput, setProduct] = useState({
    category_id: "",
    slug: "",
    name: "",
    description: "",
    meta_title: "",
    meta_keyword: "",
    meta_descrip: "",
    selling_price: "",
    original_price: "",
    qty: "",
    brand: "",
    featured: "",
    popular: "",
    status: "",
  });
  const [picture, setPicture] = useState([]);
  const [errorlist, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleInput = (e) => {
    e.persist();
    setProduct({ ...productInput, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    const product_id = props.match.params.id;
    const formData = new FormData();
    console.warn(picture.image);
    formData.append("image", picture.image);
    formData.append("category_id", productInput.category_id);
    formData.append("slug", productInput.slug);
    formData.append("name", productInput.name);
    formData.append("description", productInput.description);
    formData.append("meta_title", productInput.meta_title);
    formData.append("meta_keyword", productInput.meta_keyword);
    formData.append("meta_descrip", productInput.meta_descrip);
    formData.append("selling_price", productInput.selling_price);
    formData.append("original_price", productInput.original_price);
    formData.append("qty", productInput.qty);
    formData.append("brand", productInput.brand);
    formData.append("featured", productInput.featured);
    formData.append("popular", productInput.popular);
    formData.append("status", productInput.status);

    axios.post(`/api/update-product/${product_id}`, formData).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        //if product added successfully then make errorlist array empty
        setError([]);
        //after product inserted make input fields empty
        setProduct({
          ...productInput,
          category_id: "",
          slug: "",
          name: "",
          description: "",
          meta_title: "",
          meta_keyword: "",
          meta_descrip: "",
          selling_price: "",
          original_price: "",
          qty: "",
          brand: "",
          image: "",
          featured: "",
          popular: "",
          status: "",
        });
      } else if (res.data.status === 422) {
        swal("All Fields Are mandatory", "", "error");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message);
        history.push("/admin/view-product");
      }
    });
  };
  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategorylist(res.data.category);
      }
    });

    const product_id = props.match.params.id;
    axios.get(`/api/edit-product/${product_id}`).then((res) => {
      if (res.data.status === 200) {
        setProduct(res.data.product);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("/admin/view-product");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);
  if (loading) {
    return <h4>Edit Product Data Loading...</h4>;
  }
  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            Edit Product
            <Link
              to="/admin/view-product"
              className="btn btn-primary btn-sm float-end"
            >
              View Product
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={updateProduct} encType="multipart/form-data">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="seotags-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seotags"
                  type="button"
                  role="tab"
                  aria-controls="seotags"
                  aria-selected="false"
                >
                  SEO Tags
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="otherdetails-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#otherdetails"
                  type="button"
                  role="tab"
                  aria-controls="otherdetails"
                  aria-selected="false"
                >
                  otherdetails
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane card-body border fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div className="form-group mb-3">
                  <label>Select Category</label>
                  <select
                    name="category_id"
                    onChange={handleInput}
                    value={productInput.category_id}
                    className="form-control"
                  >
                    <option>Select Category</option>
                    {catgorylist.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <small className="text-danger">{errorlist.category_id}</small>
                </div>
                <div className="form-group mb-3">
                  <label>Slug</label>
                  <input
                    type="text"
                    name="slug"
                    onChange={handleInput}
                    value={productInput.slug}
                    className="form-control"
                  />
                  <small className="text-danger">{errorlist.slug}</small>
                </div>

                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={productInput.name}
                    className="form-control"
                  />
                  <small className="text-danger">{errorlist.name}</small>
                </div>

                <div className="form-group mb-3">
                  <label>Description</label>
                  <textarea
                    name="description"
                    onChange={handleInput}
                    value={productInput.description}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div
                class="tab-pane card-body border fade"
                id="seotags"
                role="tabpanel"
                aria-labelledby="seotags-tab"
                tabindex="0"
              >
                <div className="form-group mb-3">
                  <label>Meta Title</label>
                  <input
                    type="text"
                    name="meta_title"
                    onChange={handleInput}
                    value={productInput.meta_title}
                    className="form-control"
                  />
                  <small className="text-danger">{errorlist.meta_title}</small>
                </div>
                <div className="form-group mb-3">
                  <label>Meta Keywords</label>
                  <textarea
                    name="meta_keyword"
                    onChange={handleInput}
                    value={productInput.meta_keyword}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <label>Meta Description</label>
                  <textarea
                    name="meta_descrip"
                    onChange={handleInput}
                    value={productInput.meta_descrip}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div
                class="tab-pane card-body border fade"
                id="otherdetails"
                role="tabpanel"
                aria-labelledby="otherdetails-tab"
              >
                <div className="row">
                  <div className="col-md-4 form-group mb-3">
                    <label>Selling Price</label>
                    <input
                      type="text"
                      name="selling_price"
                      onChange={handleInput}
                      value={productInput.selling_price}
                      className="form-control"
                    ></input>
                    <small className="text-danger">
                      {errorlist.selling_price}
                    </small>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Original Price</label>
                    <input
                      type="text"
                      name="original_price"
                      onChange={handleInput}
                      value={productInput.original_price}
                      className="form-control"
                    ></input>
                    <small className="text-danger">
                      {errorlist.original_price}
                    </small>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Quantity</label>
                    <input
                      type="text"
                      name="qty"
                      onChange={handleInput}
                      value={productInput.qty}
                      className="form-control"
                    ></input>
                    <small className="text-danger">{errorlist.qty}</small>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Brand</label>
                    <input
                      type="text"
                      name="brand"
                      onChange={handleInput}
                      value={productInput.brand}
                      className="form-control"
                    ></input>
                    <small className="text-danger">{errorlist.brand}</small>
                  </div>
                  <div className="col-md-8 form-group mb-3">
                    <label>Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImage}
                      className="form-control"
                    />
                    <img
                      src={`http://127.0.0.1:8000/${productInput.image}`}
                      width="50px"
                      alt=""
                    />
                    <small className="text-danger">{errorlist.image}</small>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Featured(checked-shown)</label>
                    <input
                      type="checkbox"
                      name="featured"
                      onChange={handleInput}
                      value={productInput.featured}
                      className="w-50 h-50"
                    ></input>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Popular(checked-shown)</label>
                    <input
                      type="checkbox"
                      name="popular"
                      onChange={handleInput}
                      value={productInput.popular}
                      className="w-50 h-50"
                    ></input>
                  </div>
                  <div className="col-md-4 form-group mb-3">
                    <label>Status(checked-Hidden)</label>
                    <input
                      type="checkbox"
                      name="status"
                      onChange={handleInput}
                      value={productInput.status}
                      className="w-50 h-50"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary px-4 mt-2 float-end"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
