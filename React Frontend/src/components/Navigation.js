import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import "../App.css";

const Navigation = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { name, islogin, role } = userSignin;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid nav-color">
          <Link to="/home">
            <span class="navbar-brand nav-title">AgroFavor</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav  navbar">
              {islogin && <span class="nav-link welcome">Welcome {name}</span>}

              {role && role === "ADMIN" && (
                <Link to="/admin">
                  <span class="nav-link">Dashboard</span>
                </Link>
              )}
              {role && role === "SUPPLIER" && (
                <Link to="/supplier">
                  <span class="nav-link">Dashboard</span>
                </Link>
              )}
              {role && role === "CUSTOMER" && (
                <Link to="/cart">
                  <span class="nav-link">Cart</span>
                </Link>
              )}
              {role && role === "CUSTOMER" && (
                <Link to="/orders">
                  <span class="nav-link">My Oders</span>
                </Link>
              )}
              {islogin && (
                <Link to="/profile">
                  <span class="nav-link">Profile</span>
                </Link>
              )}
              <Link to="/home">
                <span class="nav-link">Home</span>
              </Link>
              <Link to="/about">
                <span class="nav-link">About</span>
              </Link>
              {!islogin && (
                <Link to="/login">
                  <span class="nav-link">Login</span>
                </Link>
              )}
              {!islogin && (
                <Link to="/registration-customer">
                  <span class="nav-link">Register</span>
                </Link>
              )}
              {islogin && (
                <div className="d-flex">
                  <button
                    onClick={onLogout}
                    className="btn btn-outline-success"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      { role === "ADMIN" || (
        <nav class="navbar navbar-expand-lg menu_bar">
          <div>
            <div id="navbarNavAltMarkup">
              <div class="navbar ">
                <Link to="/seeds">
                  <span class="nav-link padding_menu">Seeds</span>
                </Link>
                <Link to="/fertilizers">
                  <span class="nav-link padding_menu">Fertilizers</span>
                </Link>
                <Link to="/pesticides">
                  <span class="nav-link padding_menu">Pesticides</span>
                </Link>
                <Link to="/machinery">
                  <span class="nav-link padding_menu">Machinery</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
