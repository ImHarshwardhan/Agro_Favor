import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import axios from 'axios';

import 'react-slideshow-image/dist/styles.css';
import slideImages from "../components/slideImages"; // Import an array of slide image paths
import ProductCard from "../components/ProductCard"; // Create a separate ProductCard component
import slide1 from "./images/slide_1.jpg"
import slide2 from "./images/slide_2.jpg"
import slide3 from "./images/slide_3.jpg"
import slide4 from "./images/slide_4.jpg"
import slide5 from "./images/slide_5.jpg"
import slide6 from "./images/slide_6.jpg"
import slide7 from "./images/slide_7.jpg"
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.fetchProduct);
    const user = useSelector((store) => store.userSignin);
    const { id, name, islogin } = user;
    const { error, productresponse, loading } = products;
  
    useEffect(() => {
      dispatch(getProducts());
    }, []);
  
    useEffect(() => {}, [error, productresponse, loading]);

  const onAddToCart = (product) => {
    const quantity=1;
    if (islogin) {
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      };

      const user = { id, name };
      const body = { user, product, quantity };

      const url = 'http://localhost:8080/cart/add_item';
      axios.post(url, body, header)
        .then((response) => {
          dispatch(getProducts());
          console.log(response.status);
          alert("Product Added");
        })
        .catch((error) => {
          alert("Error in calling API: " + error);
        });
    } else {
      props.history.push("/login");
    }
  };

  return (
    <div>
    {/* *******************************Slide Images*********************************** * */}
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100" alt="" width="2000" height="400"/>   
          </div>

          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="" width="2000" height="400"/>
          </div>

         <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="" width="2000" height="400"/>
          </div>

          <div class="carousel-item">
            <img src={slide4} class="d-block w-100" alt="" width="3000" height="400"/>
          </div>

          <div class="carousel-item">
            <img src={slide5} class="d-block w-100" alt="" width="3500" height="400"/>
          </div>

          <div class="carousel-item">
            <img src={slide6} class="d-block w-100" alt="" width="4000" height="400"/>
          </div>

          <div class="carousel-item">
            <img src={slide7} class="d-block w-100" alt="" width="2500" height="400"/>
          </div>
       
        <div class="carousel-control-prev" type="" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </div>
        <div class="carousel-control-next" type="" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </div>         
        </div>

        </div>
  
      <div className="row">
      {productresponse &&
        productresponse.map((product) => {
        return (
          <div className="product col-md-3">
            <div className="title">{product.name}</div>
            <div className="description">{product.description}</div>
            <div className="price">Price: ₹ {product.price}/-</div>
            <button
              onClick={() => {
                onAddToCart(product)
              }}
              className="btn btn-sm btn-success btn-add-to-cart">
              Add to cart
            </button>
          </div>
        )
      })}
    </div>

    </div>
  )
};

export default HomeScreen;
