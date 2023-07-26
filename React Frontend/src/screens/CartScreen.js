import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import axios from 'axios'
import React, { Component } from 'react'

const CartScreen = (props) => {
    const  userSignin = useSelector((store) => store.userSignin);
  const {id} = userSignin;
  const [userId, setUserId] = useState(id)
  var [cartresponse, setCartresponse] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const url = 'http://localhost:8080/cart/get_cart/'+userId
        axios
          .get(url, header)
          .then((response) => {
            setCartresponse(response.data)
            })
          .catch((error) => {
            alert("error in calling APT : "+error)
          })
  }, []);

  useEffect(() => {}, []);

  const onDelete = (cartId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
    const url = 'http://localhost:8080/cart/remove_item/'+cartId
      axios
        .delete(url, header)
        .then((response) => {
            onLoad()
          })
        .catch((error) => {
          alert("error in calling APT : "+error)
        })
  }

   const onLoad = ()=>{
    const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const url = 'http://localhost:8080/cart/get_cart/'+userId
        axios
          .get(url, header)
          .then((response) => {
            setCartresponse(response.data)
            })
          .catch((error) => {
            alert("error in calling APT : "+error)
          })
   }
   const onPlace = ()=>{
    const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const url = 'http://localhost:8080/orders/place/'+userId
        axios
          .post(url, header)
          .then((response) => {
              alert('Order Placed')
              props.history.push('/home')
            })
          .catch((error) => {
            alert("error in calling APT : "+error)
          })
   }
  return (
    <div className="container">
      <Header title="Cart Screen"></Header>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartresponse &&
            cartresponse.map((cart) => {
              return (
                <tr>
                  <td>{cart.id}</td>
                  <td>{cart.product.name}</td>
                  <td>{cart.quantity}</td>
                  <td>
                    <button onClick={() => onDelete(cart.id)} className="btn btn-danger ">Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/home">
        <button className="btn btn-primary ">Back</button>
      </Link>
      <button onClick={onPlace} className="btn btn-success ">Plcae Order</button>
    </div>
  );
};

export default CartScreen;
