import axios from 'axios';
import callApi from './path-to-callApi'; // Adjust the path

import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_SINGLE_FAIL,
  PRODUCT_FETCH_SINGLE_REQUEST,
  PRODUCT_FETCH_SINGLE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  SUPPLIER_PRODUCT_FETCH_FAIL,
  SUPPLIER_PRODUCT_FETCH_REQUEST,
  SUPPLIER_PRODUCT_FETCH_SUCCESS,
  SUPPLIER_CURRENTORDER_FETCH_FAIL,
  SUPPLIER_CURRENTORDER_FETCH_REQUEST,
  SUPPLIER_CURRENTORDER_FETCH_SUCCESS,
} from '../constants/productConstant';

export const addProduct = (name, description, price, weight, thumbnails, image, categoryaa) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_ADD_REQUEST });

    try {
      const body = {
        name,
        description,
        price,
        weight,
        thumbnails,
        image,
        categoryaa,
      };
      const response = await callApi('/products/add_product', 'post', body, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: PRODUCT_ADD_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_ADD_FAIL,
        payload: error,
      });
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_FETCH_REQUEST });

    try {
      const response = await callApi('/products/get_products', 'get', {}, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: PRODUCT_FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FETCH_FAIL,
        payload: error,
      });
    }
  };
};

export const getSingleProduct = (productId) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_FETCH_SINGLE_REQUEST });

    try {
      const response = await callApi(`/products/get_product/${productId}`, 'get', {}, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: PRODUCT_FETCH_SINGLE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FETCH_SINGLE_FAIL,
        payload: error,
      });
    }
  };
};

export const updateProduct = (name, description, price, weight, thumbnails, image, categoryaa) => {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });

    try {
      const body = {
        name,
        description,
        price,
        weight,
        thumbnails,
        image,
        categoryaa,
      };
      // Adjust the URL for your update endpoint
      const response = await callApi('/products/update_product', 'post', body, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: error,
      });
    }
  };
};

export const getProductsbySupplier = (supplierId) => {
  return async (dispatch) => {
    dispatch({ type: SUPPLIER_PRODUCT_FETCH_REQUEST });

    try {
      const response = await callApi(`/supplier/get_products/${supplierId}`, 'get', {}, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: SUPPLIER_PRODUCT_FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: SUPPLIER_PRODUCT_FETCH_FAIL,
        payload: error,
      });
    }
  };
};

export const getCurrOrderBySupplier = (supplierId) => {
  return async (dispatch) => {
    dispatch({ type: SUPPLIER_CURRENTORDER_FETCH_REQUEST });

    try {
      const response = await callApi(`/supplier/get_currOrders/${supplierId}`, 'get', {}, {
        token: sessionStorage['token'],
      });

      dispatch({
        type: SUPPLIER_CURRENTORDER_FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: SUPPLIER_CURRENTORDER_FETCH_FAIL,
        payload: error,
      });
    }
  };
};