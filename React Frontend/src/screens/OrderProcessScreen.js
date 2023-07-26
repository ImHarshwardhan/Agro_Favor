import { getSingleOrder } from "../actions/orderAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { Component } from 'react'
import Header from "../components/Header";
import { Link } from "react-router-dom";

import axios from 'axios'

const OrderProcessScreen = (props) => {
    const dispatch = useDispatch();
    const orderItem= JSON.parse(sessionStorage.getItem('orderItem'))
    const orderId = orderItem.id;
    const orderDetails = useSelector((store) => store.fetchSingleOrder)
    const { error, response, loading  } =orderDetails

    useEffect(() => {
        dispatch(getSingleOrder(orderItem.id));
        console.log(orderItem.id)
      }, []);
    
      useEffect(() => {}, [error, response, loading]);

          
      const onDelivered = (orderId) => {
        const header = {
          headers: {
            'Content-Type': 'application/json',
            token: sessionStorage['token'],
          },
        }
        const url = 'http://localhost:8080/supplier/setOrderStatus/'+orderId
          axios
            .post(url, header)
            .then((response) => {
              dispatch(getSingleOrder(orderId))
                console.log(response.status)
                alert( "Order Status updated , go back")
              })
            .catch((error) => {
              alert("error in calling APT : "+error)
            }) 
      }

      return (
        <div className="container">
      <Header title="Process Order Screen"></Header>
      {response &&
        <div>
            <table className="table table-bordered " >
              <tr> 
                <th> Item ID  </th>
                <td> {orderItem.id} </td>
              </tr>
              <tr> 
                <th> Order ID   </th>
                <td> {response.id} </td>
              </tr>
              <tr> 
                <th> Product ID  </th>
                <td> {orderItem.product.id} </td>
              </tr>
              <tr> 
                <th> Product Quantity  </th>
                <td> {orderItem.quantity} </td>
              </tr>
              <tr> 
                <th> Address  </th>
                <td> {response.shippingAddress} </td>
              </tr>
              <tr> 
                <th> Email  </th>
                <td> {response.email} </td>
              </tr>
              <tr> 
                <th> Order Date  </th>
                <td> {response.orderDate} </td>
              </tr>
             
            </table>
            
           
        </div>
      }
        <Link to="/supplier" className="signup-color">
                   <button className="btn btn-success " >Back</button>
        </Link>

        
       <button onClick={() => onDelivered(orderId)} className="btn btn-success " >Deliverd </button>
        
      </div>
      )

}

export default OrderProcessScreen;
