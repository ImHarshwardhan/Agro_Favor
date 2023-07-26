import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import axios from 'axios'
import React, { Component } from 'react'

const OederScreen = (props) => {
    const  userSignin = useSelector((store) => store.userSignin);
  const {id} = userSignin;
  const [userId, setUserId] = useState(id)
  var [orderresponse, setOrderresponse] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
      const url = 'http://localhost:8080/orders/myOrders/'+userId
        axios
          .get(url, header)
          .then((response) => {
            setOrderresponse(response.data)
            })
          .catch((error) => {
            alert("error in calling APT : "+error)
          })
  }, []);

  useEffect(() => {}, []);

  const onDelete = (orderId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
    const url = 'http://localhost:8080/orders/cancel/'+orderId
      axios
        .post(url, header)
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
      const url = 'http://localhost:8080/orders/myOrders/'+userId
        axios
          .get(url, header)
          .then((response) => {
            setOrderresponse(response.data)
            })
          .catch((error) => {
            alert("error in calling APT : "+error)
          })

   }
    
  return (
    <div className="container">
      <Header title="My Order"></Header>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Order Address</th>
            <th>Order Date</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orderresponse &&
            orderresponse.map((order) => {
              return (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.amount}</td>
                  <td>{order.orderAddress}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.status}</td>
                  <td>
                      {order.status ==='PLACED' && 
                    <button onClick={() => onDelete(order.id)} className="btn btn-danger ">Cancel Order</button>
                    }
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/home">
        <button className="btn btn-primary ">Back</button>
      </Link>
    </div>
  );
};

export default OederScreen;
