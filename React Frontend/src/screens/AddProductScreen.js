import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actions/categoryAction";
import Select from "react-select";
import Header from "../components/Header";

const AddProductScreen = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [thumbnails, setThumbnails] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.fetchCategory);
  const { categoryerror, categoryresponse, categoryloading } = categories;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    console.log("check-1");
    console.log(categoryresponse);
    console.log("check-2");
  }, [categoryerror, categoryresponse, categoryloading]);

  const addproduct = useSelector((store) => store.addProductReducer);
  const { loading, response, error, isProductAdd } = addproduct;
  const onAddProduct = () => {
    dispatch(
      addProduct(name, description, price, weight, thumbnails, image, category)
    );
  };
  useEffect(() => {
    if (isProductAdd) {
      props.history.push("/admin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, isProductAdd]);
  return (
    <div className="container signup-form">

      <div className="form">
      <Header title="Add Product"></Header>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Name</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Description </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="email"
              placeholder="Description"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Price</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder="Price"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Weight</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              type="text"
              placeholder="Weight"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Thumbnails</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setThumbnails(e.target.value);
              }}
              type="file"
              placeholder="Thumbnails"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Image </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="file"
              placeholder="Image"
              className="form-control"
            />
            <span className="help-block">
              Your phone number won't be disclosed anywhere{" "}
            </span>
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Category </strong>
          <div className="col-sm-9">
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              id="cars"
              name="cars"
            >
              {categoryresponse &&
                categoryresponse.map((category) => {
                  return <option value={category}>{category.name}</option>;
                })}
            </select>

            {/* <Select
                            // value={selectedOption}
                            // onChange={this.handleChange}
                            options={categoryresponse.value}
                        /> */}
          </div>
        </div>

        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button
                onClick={onAddProduct}
                className="btn btn-primary btn-block"
              >
                Add Product
              </button>
            </div>

            <div className="col-sm-6">
              <Link to="/admin">
                <button className="btn btn-success ">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductScreen;
