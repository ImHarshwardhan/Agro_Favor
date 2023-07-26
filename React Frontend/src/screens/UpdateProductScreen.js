import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../actions/productAction";
import Header from "../components/Header";

const UpdateProductScreen = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [thumbnails, setThumbnails] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const singleProduct = useSelector((store) => store.fetchSingleProduct);
  const { error, response, loading ,isProductUpdate} = singleProduct;

  const onUpdateProduct = () => {
    dispatch(
      updateProduct(
        id,
        name,
        description,
        price,
        weight,
        thumbnails,
        image,
        category
      )
    );
  };
  useEffect(() => {
    if (isProductUpdate) {
      props.history.push("/admin");
    } else if (error) {
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, isProductUpdate]);
  return (
    <div className="container signup-form">
      <div className="form">
        <Header title="Add Product"></Header>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Id </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="email"
              placeholder="Description" value ={response.id}
              className="form-control"
              name=""
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Name</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name" value ={response.name}
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
              placeholder="Description" value ={response.description}
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
              placeholder="Price" value ={response.price}
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
              placeholder="Weight" value ={response.weight}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Thumbnails</strong>
          <div className="col-sm-9">
            <input
              type="file"
              placeholder="Thumbnails" value ={response.thumbnails}
              className="form-control" readonly="true"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Image </strong>
          <div className="col-sm-9">
            <input
              type="file"
              placeholder="Image" value ={response.image}
              className="form-control" readonly="true"
            />
            <span className="help-block">
              Your phone number won't be disclosed anywhere{" "}
            </span>
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Category </strong>
          <div className="col-sm-9">
            <input
              type="file"
              placeholder="Image" value ={response.category}
              className="form-control" readonly="true"
            />
          </div>
        </div>

        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button
                onClick={onUpdateProduct}
                className="btn btn-primary btn-block"
              >
                Update Product
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

export default UpdateProductScreen;
